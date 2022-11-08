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

    const [disabled, setDisabled] = useState({
        square: true,
        option: true
    });

    const [mousePos, setMousePos] = useState({});

    const [starting, setStarting] = useState();

    const [tracking, setTracking] = useState(false);

    const [invert, setInvert] = useState(false);

    const [tracker, setTracker] = useState([]);

    const [reactionTime, setReactionTime] = useState(0);

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
        setTracking(true)
        setStarting(mousePos.y)
    }

    const handleClickLeft = () => {
        const d1 = new Date();
        const end = d1.getTime();

        setTracking(false)
        update_tracking({ time: end-reactionTime, tracking: tracker, choice: 'non', output: false, invert: invert })
        navigate('/temp')
    }

    const handleClickRight = () => {
        const d1 = new Date();
        const end = d1.getTime();

        setTracking(false)
        update_tracking({ time: end-reactionTime, tracking: tracker, choice: 'oui', output: true, invert: invert })
        navigate('/temp')
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const d = new Date();
            const start = d.getTime();

            setReactionTime(start)

            const prob = getRandomArbitrary(0, 1)
            setInvert(prob > .5 ? true : false)
        }
    }, [setInvert])

    return (
        <div className={style.root}>
            <div className={style.choice} style={{ flexDirection: invert ? 'row-reverse' : '', opacity: disabled.square ? 0 : 1}}>
                <MTbutton disabled={disabled.option} bg={false} onClick={handleClickLeft}>
                    Non
                </MTbutton>
                <MTbutton disabled={disabled.option} bg={true} onClick={handleClickRight}>
                    Oui
                </MTbutton>
            </div>
            <div className={style.question}>
                <Typography>
                    D'après les informations affichées, investiriez-vous votre argent dans ce fonds d'investissement ?
                </Typography>
                <Typography>
                    <i>Vous devez répondre le plus rapidement et précisément possible.</i>
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