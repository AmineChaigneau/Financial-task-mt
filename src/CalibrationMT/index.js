import { useState, useEffect } from 'react'
import { Button, MTbutton } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import style from './index.module.css'
import { useMousePosition } from '../hook'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { update_calibration } from '../Redux/Actions/calibration'
import { page } from '../Redux/Actions/export'

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

const CalibrationMT = ({ update_calibration, subject_id, text, page }) => {

    const navigate = useNavigate();

    const [disabled, setDisabled] = useState({
        square: true,
        option: true
    });

    const [tracking, setTracking] = useState(false);

    const [mousePos, setMousePos] = useState({});

    const [calibration, setCalibration] = useState(0);

    const [tracker, setTracker] = useState([]);

    const [starting, setStarting] = useState();

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    useEffect(() => {
        if (disabled.option) {
            tracking && mousePos.y <= starting - 50 && setDisabled({ ...disabled, option: false })
        }
    }, [mousePos, setDisabled, tracking]);

    const handleClick = () => {
        setDisabled({ ...disabled, square: false })
        setTracker([]);
        setTracking(true)
        setStarting(mousePos.y)
    }

    const handleClickResponse = () => {
        setCalibration(calibration + 1);
        setDisabled({ option: true, square: true })
        setTracking(false);
        update_calibration({subject_id: subject_id, tracking: tracker})
    }

    const handleRedirect = () => {
        navigate('/risk')
        page();
    }

    return (
        <div className={style.root}>
            {calibration >= 20 ? (
                <div className={style.button}>
                    <Button  onClick={handleRedirect}>{text.button}</Button>
                </div>
            ) : (
            <>
                <div className={style.choice} style={{ opacity: disabled.square ? 0 : 1 }}>
                    <MTbutton disabled={disabled.option || calibration >= 10} bg={true} onClick={handleClickResponse}>
                        {text.calib_label[0]}
                    </MTbutton>
                    <MTbutton disabled={disabled.option || calibration <= 9} bg={true} onClick={handleClickResponse}>
                        {text.calib_label[1]}
                    </MTbutton>
                </div>
                <div className={style.question}>
                    <Typography>
                       {text.calib_consigne1[0]} <b style={{ color: 'red' }}>{calibration >= 10 ? `${text.calib_label[1]}` : `${text.calib_label[0]}`}</b> {text.calib_consigne1[1]}.
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{__html: text.calib_consigne2 }}/>
                    <Typography><strong>{calibration <= 9 ? calibration : (calibration - 10)}</strong>/10</Typography>
                </div>
                <div className={style.start}>
                    <Button className='outlined' onClick={handleClick} disabled={!disabled.square} style={{ opacity: disabled.square ? 1 : 0 }}>
                        +
                    </Button>
                    <div className={style.redline}></div>
                </div>
                {tracking ? <Tracker stateChanger={setTracker} /> : null}
            </>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
    text: state.textReducer.text,
})

export default connect(mapStateToProps, { update_calibration, page })(CalibrationMT)