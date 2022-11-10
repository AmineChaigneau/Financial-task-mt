import style from './index.module.css'
import { ReactComponent as France } from './france.svg'
import { ReactComponent as Italy } from './italy.svg'
import english from './united-kingdom.png'
import { fr, it, en } from '../Component/ressources/text'
import { choose_langue } from '../Redux/Actions/langue'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetStore } from '../Redux/Actions/reset'
import { useEffect } from 'react'
import { Typography } from '../Component/styles/typography.styled'
import { ButtonIcon } from '../Component/button.styled'

const Langue = ({ resetStore, choose_langue}) => {

    useEffect(() => {
        resetStore()
    }, [resetStore])

    const navigate = useNavigate();

    const handleClickFr = () => {
        navigate('./home')
        choose_langue({langue: 'fr', text: fr});
    }

    const handleClickIt = () => {
        navigate('./home')
        choose_langue({langue: 'it', text: it});
    }

    const handleClickEn = () => {
        navigate('./home')
        choose_langue({langue: 'en', text: en});
    }

    return (
        <div className={style.root}>
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

export default connect(null, { choose_langue, resetStore })(Langue)