import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { update_res } from '../Redux/Actions/export'
import { useNavigate } from 'react-router-dom'

const Temp = ({ update_res, current_trial, nb_trial }) => {

    const navigate = useNavigate();

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (nb_trial === 0) {
                update_res(current_trial)
                navigate('/question')
            } else if (nb_trial === 5) {
                update_res(current_trial)
                navigate('/question')
            } else if (nb_trial === 6) {
                update_res(current_trial)
                navigate('/question')
            } else if (nb_trial === 11) {
                update_res(current_trial)
                navigate('/question')
            } else {
                update_res(current_trial)
                navigate('/stimuli')
            }
        }
    }, [update_res, navigate, current_trial])

    return (
        <>
        </>
    )
}

const mapStateToProps = state => ({
    current_trial: state.currentReducer,
    nb_trial: state.exportReducer.nb_trial,
})

export default connect(mapStateToProps, { update_res })(Temp)