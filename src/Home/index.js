import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import style from './index.module.css'
import { useEffect } from 'react'
import { resetStore } from '../Redux/Actions/reset'
import { connect } from 'react-redux'

const Home = ({ resetStore, subject_id_global }) => {

    useEffect(() => {
        resetStore()
    }, [resetStore])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/formulaire')
    }

    return (
        <div className={style.root}>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h1'}>Bienvenue</Typography>
                    <Typography variant={'h3'}><i>{subject_id_global}</i></Typography>
                </div>
                <Typography variant={'h4'}>
                    Nous souhaitons mieux comprendre les processus de <b>la prise de décisions financières et d'investissement</b>.
                    Pour cette étude, des informations concernant différents fonds d'investissement vous seront présentées.
                    Ensuite, vous devrez répondre à plusieurs questions sur ces sujets. Vos réponses resteront totalement confidentielles.  La durée de l'étude est d'environ <b>15 minutes</b>.
                </Typography>
                <Typography variant={'h4'}>
                    Votre participation à l'étude est volontaire. En continuant, vous confirmez avoir a minima 18 ans. Vous pouvez choisir de mettre fin à votre participation à tout moment.
                    Vous pouvez contacter les chercheurs responsables de l'étude à l'adresse e-mail suivante : <i><u>milos.borozan@univ-rouen.fr</u></i>.
                </Typography>
                <Typography variant={'h4'}>
                    <i>Aucune donnée individuelle ne sera traitée, seuls des résultats combinés avec d’autres participants à ce test seront analysés. </i>
                </Typography>
            </div>
            <div className={style.button}>
                <Button onClick={handleClick} disabled={false}>
                    Continuer
                </Button>
            </div>
            <div className={style.footer}>
                contact :  <u>milos.borozan@univ-rouen.fr</u>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id_global: state.exportReducer.subject_id
})

export default connect(mapStateToProps, { resetStore })(Home)

