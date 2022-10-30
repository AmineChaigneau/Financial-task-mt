import { useState, useEffect, useRef } from 'react'
import { Button, MTbutton } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import style from './index.module.css'
import { useMousePosition, getRandomArbitrary } from '../hook'
import { connect } from 'react-redux'
import { update_tracking } from '../Redux/Actions/current'
import { useNavigate } from 'react-router-dom'

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

const Choice = ({ update_tracking, trial_id_global }) => {

    const navigate = useNavigate();

    const isInitialMount = useRef(true);

    const [disabled, setDisabled] = useState(true);

    const [tracking, setTracking] = useState(false);

    const [invert, setInvert] = useState(false);

    const [tracker, setTracker] = useState([]);

    const handleClick = () => {
        setDisabled(false)
        setTracking(true)
    }

    const handleClickLeft = () => {
        setTracking(false)
        update_tracking({ time: 0, tracking: tracker, choice: 'non', output: false, invert: invert })
        navigate('/temp')
    }

    const handleClickRight = () => {
        setTracking(false)
        update_tracking({ time: 0, tracking: tracker, choice: 'oui', output: true, invert: invert })
        navigate('/temp')
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const prob = getRandomArbitrary(0, 1)
            setInvert(prob > .5 ? true : false)
        }
    }, [setInvert])

    return (
        <div className={style.root}>
            <div className={style.choice} style={{ flexDirection: invert ? 'row-reverse' : ''}}>
                <MTbutton disabled={disabled} bg={false} onClick={handleClickLeft}>
                    Non
                </MTbutton>
                <MTbutton disabled={disabled} bg={true} onClick={handleClickRight}>
                    Oui
                </MTbutton>
            </div>
            <div className={style.question}>
                <Typography>
                    D'après les informations affichées, investiriez-vous votre argent dans ce fonds d'investissement ?
                </Typography>
            </div>
            <div className={style.start}>
                <Button className='outlined' onClick={handleClick} disabled={!disabled} style={{ opacity: disabled ? 1 : 0 }}>
                    +
                </Button>
            </div>
            {tracking ? <Tracker stateChanger={setTracker} /> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    trial_id_global: state.currentReducer.id_trial,
})

export default connect(mapStateToProps, { update_tracking })(Choice)