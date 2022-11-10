import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import rules from '../Component/ressources/Eco_rules.png'
import mtrules from '../Component/ressources/Mt_rules.png'
import style from './index.module.css'
import { useState } from 'react'
import image from '../Component/ressources/img_test.jpeg'
import { connect } from 'react-redux'

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

const Trois = ({ onClick, text }) => {

    return (
        <div className={style.imgContainer}>
            <img alt='' src={image} />
            <div className={style.buttonImg}>
                <Button onClick={onClick} disabled={false}>
                    {text.button3}
                </Button>
            </div>
        </div>
    )
}


const Consigne = ({ text }) => {

    const navigate = useNavigate();

    const [page, setPage] = useState(1);

    const display = () => {
        switch (page) {
            case 1:
                return <Un onClick={() => setPage(page + 1)} text={text}/>
            case 2:
                return <Deux onClick={() => setPage(page + 1)} text={text}/>
            case 3:
                return <Trois onClick={() => navigate('/stimuli')} text={text}/>
            default:
                return <div>Err</div>
        }
    }

    return (
        <div className={style.root}>
            <div className={style.container}>
                {display()}
            </div>
            {page <= 2 && <div className={style.footer} dangerouslySetInnerHTML={{__html: text.contact }} />}
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.textReducer.text,
})

export default connect(mapStateToProps)(Consigne)