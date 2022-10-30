import { useState, useEffect } from 'react'
import { Button, MTbutton } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import style from './index.module.css'
import { useMousePosition } from '../hook'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { update_calibration } from '../Redux/Actions/calibration'

const Tracker = ({ stateChanger, ...rest }) => {

    const start = new Date();

    const position = useMousePosition(start);

    useEffect(() => {
        stateChanger(position)
    }, [position])

    return (
        <>
        </>
    )
}

const CalibrationMT = ({ update_calibration, subject_id }) => {

    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(true);

    const [tracking, setTracking] = useState(false);

    const [calibration, setCalibration] = useState(0);

    const [tracker, setTracker] = useState([]);

    const handleClick = () => {
        setDisabled(false)
        setTracker([]);
        setTracking(true)
    }

    const handleClickResponse = () => {
        setCalibration(calibration + 1);
        setDisabled(true);
        setTracking(false);
        update_calibration({subject_id: subject_id, tracking: tracker})
    }

    const handleRedirect = () => {
        navigate('/transition')
    }

    return (
        <div className={style.root}>
            {calibration >= 20 ? (
                <div className={style.button}>
                    <Button  onClick={handleRedirect}>Continuer</Button>
                </div>
            ) : (
            <>
                <div className={style.choice}>
                    <MTbutton disabled={disabled || calibration >= 10} bg={true} onClick={handleClickResponse}>
                        Gauche
                    </MTbutton>
                    <MTbutton disabled={disabled || calibration <= 9} bg={true} onClick={handleClickResponse}>
                        Droite
                    </MTbutton>
                </div>
                <div className={style.question}>
                    <Typography>
                        Après avoir cliquer sur le boutton de départ "+", vous devez cliquer le plus rapidement possible sur le boutton en haut à <b>{calibration >= 10 ? 'droite' : 'gauche'}</b> de l'écran.
                    </Typography>
                </div>
                <div className={style.start}>
                    <Button className='outlined' onClick={handleClick} disabled={!disabled} style={{ opacity: disabled ? 1 : 0 }}>
                        +
                    </Button>
                </div>
                {tracking ? <Tracker stateChanger={setTracker} /> : null}
            </>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
})

export default connect(mapStateToProps, { update_calibration })(CalibrationMT)