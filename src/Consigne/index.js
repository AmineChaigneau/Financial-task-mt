import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import rules from '../Component/ressources/Eco_rules.png'
import mtrules from '../Component/ressources/Mt_rules.png'
import style from './index.module.css'
import { useState } from 'react'
import image from '../Component/ressources/img_test.jpeg'

const Consigne = () => {

    const navigate = useNavigate()

    const [img, setImg] = useState(false)

    return (
        <div className={style.root}>
            {img ? (
                <div className={style.imgContainer}>
                    <img alt='' src={image} />
                    <div className={style.buttonImg}>
                        <Button onClick={() => navigate('/stimuli')} disabled={false}>
                            Commencer l'experimentation
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    <div className={style.container}>
                        <div className={style.content}>
                            <div className={style.text}>
                                <Typography variant={'h4'}>
                                    L’objectif de cette section est de décrire le déroulement global de l'expérimentation. Veuillez lire <b>attentivement</b> l’ensemble des instructions.
                                </Typography>
                                <Typography variant={'h4'}>
                                    Les décisions d'investissement sont généralement basées sur les données de différentes entreprises ou fonds d'investissement qu'un utilisateur prend en considération. Ces données sont présentées de manière standardisée dans les documents financiers.
                                </Typography>
                                <Typography variant={'h4'}>
                                    Par conséquent, nous vous demanderons <b>d'examiner attentivement certains documents financiers</b> (<i>image 1</i>).
                                    Ensuite nous vous poserons quelques <b>questions</b> à ce sujet et une interface de choix vous sera présentée (<i>image 2</i>).
                                </Typography>
                                <Typography variant={'h4'}>
                                    Le temps disponible pour consulter chaque document financier sera <b>limité</b>.
                                    Chaque document présente une structure similaire, veuillez par ailleurs considérer chaque document séparément.
                                    Nous vous rappelons qu’il <b>n'y a pas de bonnes ou de mauvaises réponses</b>, nous ne nous intéressons qu'à vos propres préférences.
                                </Typography>
                                <Typography variant={'h4'}>
                                    Avant de débuter, un exemple de document financier va vous être présenté, sans limite de temps. Cliquez simplement sur continuer pour débuter l'expérimentation.
                                </Typography>
                            </div>
                            <div className={style.button}>
                                <Button onClick={() => setImg(true)} disabled={false}>
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
                </>
            )}
        </div>
    )
}

export default Consigne