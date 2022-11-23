import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import style from './index.module.css'
// import { resetStore } from '../Redux/Actions/reset'
import { connect } from 'react-redux'
import { page } from '../Redux/Actions/export'

const Home = ({ subject_id_global, text, page }) => {

    // useEffect(() => {
    //     resetStore()
    // }, [resetStore])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/formulaire')
        page();
    }

    return (
        <div className={style.root}>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h1'}>{text.home_title}</Typography>
                    <Typography variant={'h3'}><i>{subject_id_global}</i></Typography>
                </div>
                <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.home_corps1 }} />
                <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.home_corps2 }} />
                <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.home_corps3 }} />
            </div>
            <div className={style.button}>
                <Button onClick={handleClick} disabled={false}>
                    {text.button}
                </Button>
            </div>
            <div className={style.footer} dangerouslySetInnerHTML={{__html: text.contact }} />
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id_global: state.exportReducer.subject_id,
    text: state.textReducer.text,
})

export default connect(mapStateToProps, { page })(Home)

