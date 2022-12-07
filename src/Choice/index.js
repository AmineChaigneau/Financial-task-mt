import { useState, useEffect, useRef } from 'react'
import { Button, MTbutton } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import style from './index.module.css'
import { useMousePosition, getRandomArbitrary } from '../hook'
import { connect } from 'react-redux'
import { update_tracking } from '../Redux/Actions/current'
import { useNavigate } from 'react-router-dom'
import { page } from '../Redux/Actions/export'

const Tracker = ({ stateChanger, page, ...rest }) => {

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

const Choice = ({ update_tracking, text, page, invert }) => {

    const navigate = useNavigate();

    // const isInitialMount = useRef(true);

    const [disabled, setDisabled] = useState({
        square: true,
        option: true
    });

    const [mousePos, setMousePos] = useState({});

    const [starting, setStarting] = useState();

    const [tracking, setTracking] = useState(false);

    // const [invert, setInvert] = useState(false);

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

        const err = typeof mousePos.y !== "undefined" ? true : false

        if(err) {
            setDisabled({ ...disabled, square: false })
            setTracking(true)
            setStarting(mousePos.y)
        }
    }

    const handleClickLeft = () => {
        const d1 = new Date();
        const end = d1.getTime();

        setTracking(false)
        update_tracking({ time: end - reactionTime, tracking: tracker, choice: 'non', output: false, invert: invert })
        navigate('/temp')
        page();
    }

    const handleClickRight = () => {
        const d1 = new Date();
        const end = d1.getTime();

        setTracking(false)
        update_tracking({ time: end - reactionTime, tracking: tracker, choice: 'oui', output: true, invert: invert })
        navigate('/temp')
        page();
    }

    useEffect(() => {
        // if (isInitialMount.current) {
        //     isInitialMount.current = false;
        // } else {
            const d = new Date();
            const start = d.getTime();

            setReactionTime(start)

            // const prob = getRandomArbitrary(0, 1)
            // setInvert(prob > .5 ? true : false)
        // }
    }, [])
    // }, [setInvert])

    return (
        <div className={style.root}>
            <div className={style.choice} style={{ flexDirection: invert ? 'row-reverse' : '', opacity: disabled.square ? 0 : 1 }}>
                <MTbutton disabled={disabled.option} bg={false} onClick={handleClickLeft}>
                    {text.choice_lab[0]}
                </MTbutton>
                <MTbutton disabled={disabled.option} bg={true} onClick={handleClickRight}>
                    {text.choice_lab[1]}
                </MTbutton>
            </div>
            <div className={style.question}>
                <Typography>
                    {text.choice_q1}
                </Typography>
                <Typography>
                    <i>{text.choice_q2}</i>
                </Typography>
            </div>
            <div className={style.start}>
                <Button className='outlined' onClick={handleClick} disabled={!disabled.square} style={{ opacity: disabled.square ? 1 : 0 }}>
                    +
                </Button>
            </div>
            {tracking ? <Tracker stateChanger={setTracker} /> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.textReducer.text,
    invert: state.textReducer.invert,
})

export default connect(mapStateToProps, { update_tracking, page })(Choice)