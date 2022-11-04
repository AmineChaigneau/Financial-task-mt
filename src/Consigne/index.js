import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import rules from '../Component/ressources/Eco_rules.png'
import mtrules from '../Component/ressources/Mt_rules.png'
import style from './index.module.css'
import { useState } from 'react'

const Consigne = () => {

    const navigate = useNavigate()

    const [img, setImg] = useState(false)

    return (
        <div className={style.root}>
            {img ? (
                <div>
                    ICI IMAGE TEST 
                    <Button onClick={() => navigate('/stimuli')} disabled={false}>
                        Commencer
                    </Button>
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
                                    À chaque essai nous vous demanderons <b>d'examiner attentivement certains documents financiers</b> (<i>image 1.A</i>).
                                    Ensuite nous vous poserons quelques <b>questions</b> à ce sujet et une interface de choix vous sera présentée (<i>image 2.A</i>).
                                </Typography>
                                <Typography variant={'h4'}>
                                    Le temps disponible pour consulter chaque document financier sera limité.
                                    Veuillez considérer chaque document séparément. <b>Il n'y a pas de bonnes ou de mauvaises réponses.</b>
                                </Typography>
                                <Typography variant={'h4'}>
                                    Avant de débuter, un exemple de document financier va vous être présenté, sans limité de temps. Cliquez simplement sur commencer pour débuter l'expérimentation.
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