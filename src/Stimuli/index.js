import { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import style from './index.module.css'
import { ReactComponent as Fixed } from '../Component/ressources/fixed.svg'
import { useNavigate } from 'react-router-dom'
import { update_trials } from '../Redux/Actions/trials'
import { update_current } from '../Redux/Actions/current'

const Stimuli = ({ trial_global, update_trials, update_current, nb_trial }) => {

    const navigate = useNavigate()

    const isInitialMount = useRef(true);

    const timer = useRef();

    const [time, setTime] = useState(true)

    const [trial, setTrial] = useState({
        id_trial: 0,
        img: ''
    })

    // const [trialList, setTrialList] = useState(0)

    useEffect(() => {
        timer.current = setTimeout(() => {
            setTime(false)
        }, 1500)
    }, [timer, setTime])

    // useEffect(() => {
    //     timer.current = setTimeout(() => {
    //         if (isInitialMount.current) {
    //             isInitialMount.current = false;
    //          } else {
    //             navigate('/choice')
    //             update_trials(trialList)
    //             update_current(trial.id_trial)
    //          }
    //     }, 5000)
    // }, [])


    useEffect(() => {
        const index = Math.floor(Math.random() * trial_global.length);

        const item = trial_global.length !== 0 ?
            trial_global[index] : trial_global[Math.floor(Math.random() * trial_global.length)];

        // setTrialList(index)

        setTrial({
            id_trial: item.id_trial,
            img: item.img
        })

        timer.current = setTimeout(() => {
            if (isInitialMount.current) {
                isInitialMount.current = false;
            } else {
                navigate('/choice')
                update_trials(index)
                update_current(item.id_trial)
            }
        }, 2500)

    }, [])

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
})

export default connect(mapStateToProps, { update_trials, update_current })(Stimuli)