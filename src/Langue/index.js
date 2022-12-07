import style from './index.module.css'
import { ReactComponent as France } from './france.svg'
import { ReactComponent as Italy } from './italy.svg'
import english from './united-kingdom.png'
import { fr, it, en } from '../Component/ressources/text'
import { choose_langue, set_invert } from '../Redux/Actions/langue'
import { load_trial_list } from '../Redux/Actions/trials'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetStore } from '../Redux/Actions/reset'
import { useEffect, useState } from 'react'
import { Typography } from '../Component/styles/typography.styled'
import { ButtonIcon } from '../Component/button.styled'
import { trials_en, trials_it } from '../Component/ressources/stimuli_list'
import { Checkbox } from '../Component/checkbox.styled'

const Langue = ({ resetStore, choose_langue, load_trial_list, set_invert}) => {

    useEffect(() => {
        resetStore()
    }, [resetStore])

    const navigate = useNavigate();

    const handleClickFr = () => {
        navigate('./home')
        choose_langue({langue: 'fr', text: fr});
        set_invert(checked)
    }

    const handleClickIt = () => {
        navigate('./home')
        choose_langue({langue: 'it', text: it});
        load_trial_list(trials_it)
        set_invert(checked)
    }

    const handleClickEn = () => {
        navigate('./home')
        choose_langue({langue: 'en', text: en});
        load_trial_list(trials_en)
        set_invert(checked)
    }

    const [checked, setChecked] = useState(false)

    return (
        <div className={style.root}>
            <div className={style.invert}>
                <Typography variant={'h4'}><strong>Invert response</strong></Typography>
                <Checkbox checked={checked} onChange={() => setChecked(!checked)}/>
            </div>
            <Typography variant={'h4'}>
                First, choose your <strong>language</strong>.
            </Typography>
            <div className={style.flag}>
                <ButtonIcon onClick={handleClickFr}>
                    <France />
                </ButtonIcon>
                <ButtonIcon onClick={handleClickIt}>
                    <Italy />
                </ButtonIcon>
                <ButtonIcon onClick={handleClickEn}>
                    <img alt='' src={english} />
                </ButtonIcon>
            </div>
        </div>
    )
}

export default connect(null, { choose_langue, resetStore, load_trial_list, set_invert })(Langue)