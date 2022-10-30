import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import rules from '../Component/ressources/Eco_rules.png'
import mtrules from '../Component/ressources/Mt_rules.png'
import style from './index.module.css'

const Transition = () => {

    const navigate = useNavigate()

    return (
        <div className={style.root}>
            <div className={style.container}>
            <div className={style.content}>
                    <Typography variant={'h3'}>
                        L'expérimentation va débuter.
                    </Typography>
                    <Button onClick={() => navigate('/stimuli')} disabled={false}>
                        Continuer
                    </Button>
                </div>
                <div className={style.contentImg}>
                    <div className={style.image}>
                        <img alt='' src={rules} />
                    </div>
                    <div className={style.image}>
                        <img alt='' src={mtrules} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transition;