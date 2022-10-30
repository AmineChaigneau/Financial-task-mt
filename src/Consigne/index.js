import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import rules from '../Component/ressources/Eco_rules.png'
import mtrules from '../Component/ressources/Mt_rules.png'
import style from './index.module.css'

const Consigne = () => {

    const navigate = useNavigate()

    return (
        <div className={style.root}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.text}>
                    <Typography variant={'h4'}>
                        L’objectif de cette section est de décrire le déroulement global de l'expérimentation. Veuillez lire attentivement l’ensemble des instructions.
                    </Typography>
                    <Typography variant={'h4'}>
                        À chaque essai, un document contenant des informations sur un fonds d'investissement vous sera présenté pendant un temps défini (<i>image 1.A</i>).
                        Ensuite, une interface de choix vous sera présentée. Après avoir cliqué le bouton "+" (<i>image 2.A</i>) vous pourrez choisir d'investir ou non dans le fonds d'investissement (<i>image 2.B</i>).
                    </Typography>
                    <Typography variant={'h4'}>
                        Au cours de cette expérience, nous utiliserons les technologies de suivi oculaire et de suivi de la souris. Avant de commencer,
                        une courte phase d'entraînement vous sera présentée pour vous familiariser avec les outils et interfaces de l'étude. Cette phase permettera l'étalonnage des instruments.
                    </Typography>
                    </div>
                    <div className={style.button}>
                        <Button onClick={() => navigate('/calibration')} disabled={false}>
                            Continuer
                        </Button>
                    </div>
                </div>
                <div className={style.image}>
                    <img alt='' src={rules} />
                    <Typography><i><u>Image 1</u></i> : interface relative aux informations sur un fonds d'investissement</Typography>
                    <img alt='' src={mtrules} />
                    <Typography><i><u>Image 2</u></i> : interface de choix.</Typography>
                </div>
            </div>
            <div className={style.footer}>
                contact :  <u>milos.borozan@univ-rouen.fr</u>
            </div>
        </div>
    )
}

export default Consigne