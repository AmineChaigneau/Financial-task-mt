import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import rules from '../Component/ressources/Eco_rules.png'
import mtrules from '../Component/ressources/Mt_rules.png'
import style from './index.module.css'
import { useState } from 'react'
import image from '../Component/ressources/img_test.jpeg'
import image_it from '../Component/ressources/img_test_it.jpeg'
import image_en from '../Component/ressources/img_test_en.jpeg'
import { connect } from 'react-redux'
import { page } from '../Redux/Actions/export'

const Un = ({ onClick, text }) => {
    return (
        <>
            <div className={style.content}>
                <div className={style.text}>
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.consigne_un_corps1 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.consigne_un_corps2 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.consigne_un_corps3 }} />
                </div>
                <div className={style.button}>
                    <Button onClick={onClick} disabled={false}>
                        {text.button}
                    </Button>
                </div>
            </div>
            <div className={style.image}>
                <img alt='' src={rules} />
                <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.consigne_image1 }} />
            </div>
        </>
    )
}

const Deux = ({ onClick, text }) => {
    return (
        <>
            <div className={style.content}>
                <div className={style.text}>
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.consigne_deux_corps1 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.consigne_deux_corps2 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.consigne_deux_corps3 }} />
                </div>
                <div className={style.button}>
                    <Button onClick={onClick} disabled={false}>
                        {text.button}
                    </Button>
                </div>
            </div>
            <div className={style.image}>
                <img alt='' src={mtrules} />
                <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.consigne_image2 }} />
            </div>
        </>
    )
}

const Trois = ({ onClick, text, langue }) => {

    return (
        <div className={style.imgContainer}>
            <img alt='' src={langue === 'en' ? image_en : langue === 'it' ? image_it : image} />
            <div className={style.buttonImg}>
                <Button onClick={onClick} disabled={false}>
                    {text.button3}
                </Button>
            </div>
        </div>
    )
}


const Consigne = ({ text, langue, page }) => {

    const navigate = useNavigate();

    const [state, setState] = useState(1);

    const handleClick = () => {
        setState(state + 1)
        page();
    }

    const handleRedirect = () => {
        page();
        navigate('/stimuli')
    }

    const display = () => {
        switch (state) {
            case 1:
                return <Un onClick={handleClick} text={text}/>
            case 2:
                return <Deux onClick={handleClick} text={text}/>
            case 3:
                return <Trois onClick={handleRedirect} text={text} langue={langue}/>
            default:
                return <div>Err</div>
        }
    }

    return (
        <div className={style.root}>
            <div className={style.container}>
                {display()}
            </div>
            {state <= 2 && <div className={style.footer} dangerouslySetInnerHTML={{__html: text.contact }} />}
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.textReducer.text,
    langue: state.textReducer.langue,
})

export default connect(mapStateToProps, { page })(Consigne)