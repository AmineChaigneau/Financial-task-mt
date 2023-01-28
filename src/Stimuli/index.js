import { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import style from './index.module.css'
import { ReactComponent as Fixed } from '../Component/ressources/fixed.svg'
import { useNavigate } from 'react-router-dom'
import { update_trials } from '../Redux/Actions/trials'
import { update_current } from '../Redux/Actions/current'
import { useKeyPress } from '../hook'

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Stimuli = ({ trial_global, update_trials, update_current, time_stimuli }) => {

    const navigate = useNavigate()

    const isInitialMount = useRef(true);

    const fixation = useRef();

    // const timer = useRef(null);

    const [time, setTime] = useState(true)

    const [chrono, setChrono] = useState(0)

    const [isRunning, setIsRunning] = useState(true)

    const [skip, setSkip] = useState(false)

    const [trial, setTrial] = useState({
        id_trial: 0,
        img: '',
        index: 0
    })

    useEffect(() => {
        // 
        const index = Math.floor(Math.random() * trial_global.length);

        const item = trial_global.length !== 0 ?
            trial_global[index] : trial_global[Math.floor(Math.random() * trial_global.length)];

        setTrial({
            id_trial: item.id_trial,
            img: item.img,
            index: index
        })
        // 
        fixation.current = setTimeout(() => {
            setTime(false)
        }, 1500)
    }, [fixation, setTime])

    // const skipRef = useRef();
    // skipRef.current = skip;

    const [timeLim, setTimeLim] = useState(false)

    useInterval(() => {
        // Your custom logic here
        setChrono(chrono + 500);
        if(chrono === 1500) {
            setTimeLim(true)
            console.log('shortcut active')
        // } else if (!skip && chrono === 21500) { // créer value 
        } else if (!skip && chrono === ((time_stimuli*1000)+1500)) { 
            console.log('redirect')
            navigate('/choice')
            update_trials(trial.index)
            update_current(trial.id_trial)
            setIsRunning(false)
        }
    }, isRunning ? 500 : null);

    // useEffect(() => {
    //     const index = Math.floor(Math.random() * trial_global.length);

    //     const item = trial_global.length !== 0 ?
    //         trial_global[index] : trial_global[Math.floor(Math.random() * trial_global.length)];

    //     setTrial({
    //         id_trial: item.id_trial,
    //         img: item.img,
    //         index: index
    //     })

    //     timer.current = setTimeout(() => {
    //         // if (isInitialMount.current) {
    //         //     isInitialMount.current = false;
    //         //     console.log('non')
    //         // } else {
    //         // navigate('/choice')
    //         // update_trials(index)
    //         // update_current(item.id_trial)
    //         // }
    //         if (!skipRef.current) {
    //             console.log(skipRef.current)
    //             navigate('/choice')
    //             update_trials(index)
    //             update_current(item.id_trial)
    //         } else {
    //             console.log('clear timer shortcut')
    //         }
    //     }, 15000);

    //     timer.current = setTimeout(() => {
    //         setTimeLim(true)
    //         console.log('shortcut active')
    //     }, 5000);

    //     return () => {
    //         clearInterval(timer.current)
    //         console.log('clear')
    //     };
    // }, [])

    const handleSkip = () => {
        if(timeLim) {
            setSkip(true)
            setIsRunning(false)
            navigate('/choice')
            update_trials(trial.index)
            update_current(trial.id_trial)
            console.log('redirect shortcut')
        } else {
            console.log('shortcut disabled')
        }
    }

    useKeyPress(['a'], () => handleSkip())

    return (
        <div className={style.root}>
            {time ? (
                <div className={style.stimuli}>
                    <div>
                        <Fixed />
                    </div>
                </div>
            ) : (
                <div className={style.stimuli}>
                    <img alt='' src={trial.img} />
                    {/* <div className={style.trialId}>
                        {trial.id_trial}
                    </div> */}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    trial_global: state.trialsReducer.trial,
    nb_trial: state.exportReducer.nb_trial,
    time_stimuli: state.textReducer.time
})

export default connect(mapStateToProps, { update_trials, update_current })(Stimuli)