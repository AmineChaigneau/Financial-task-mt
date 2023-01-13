import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import rules from '../Component/ressources/Eco_rules.png'
import mtrules from '../Component/ressources/Mt_rules.png'
import style from './index.module.css'
import { useState, useEffect, useRef } from 'react'
import image from '../Component/ressources/img_test.jpeg'
import image_it from '../Component/ressources/img_test_it.jpeg'
import image_en from '../Component/ressources/img_test_en.jpeg'
import { connect } from 'react-redux'
import { page } from '../Redux/Actions/export'

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded youtube"
        />
    </div>
);

const Un = ({ onClick, text, langue }) => {
    return (
        <>
            <div className={style.content}>
                <div className={style.text}>
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_un_corps1 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_un_corps2 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_un_corps3 }} />
                </div>
                <div className={style.button}>
                    <Button onClick={onClick} disabled={false}>
                        {text.button}
                    </Button>
                </div>
            </div>
            <div className={style.image}>
                <img alt='' src={langue === 'en' ? image_en : langue === 'it' ? image_it : image}  />
                <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_image1 }} />
            </div>
        </>
    )
}

// VIDEO 
const Deux = ({ onClick, text, langue }) => {
    return (
        <>
            <div className={style.imgContainer}>
                <YoutubeEmbed embedId={langue === 'en' ? "qAGqlj2icOA" : langue === 'it' ? "I4TagyBeAQg" : "nsD9klesyQs"} />
                <div className={style.button} style={{ marginTop: 50 }}>
                    <Button onClick={onClick} disabled={false}>
                        {text.button}
                    </Button>
                </div>
            </div>
        </>
    )
}

const Trois = ({ onClick, text }) => {
    return (
        <>
            <div className={style.content}>
                <div className={style.text}>
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_trois_corps1 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_trois_corps2 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_trois_corps3 }} />
                </div>
                <div className={style.button}>
                    <Button onClick={onClick} disabled={false}>
                        {text.button}
                    </Button>
                </div>
            </div>
            <div className={style.image}>
                <img alt='' src={rules} />
                <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_image2 }} />
            </div>
        </>
    )
}

// image 30 secondes uniquement
const Quatre = ({ langue }) => {

    return (
        <div className={style.imgContainer}>
            <img alt='' src={langue === 'en' ? image_en : langue === 'it' ? image_it : image} />
        </div>
    )
}

// Ancien 2 (image)
const Cinq = ({ onClick, text }) => {

    return (
        <>
            <div className={style.content}>
                <div className={style.text}>
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_cinq_corps1 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_cinq_corps2 }} />
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_cinq_corps3 }} />
                </div>
                <div className={style.button}>
                    <Button onClick={onClick} disabled={false}>
                        {text.button3}
                    </Button>
                </div>
            </div>
            <div className={style.image}>
                <img alt='' src={mtrules} />
                <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.consigne_image3 }} />
            </div>
        </>
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

    const timer = useRef(null);

    useEffect(() => {
        if(state == 4) {
            console.log('start timer')
            timer.current = setTimeout(() => {
                setState(state+1)
            }, 30000)
        } else {
            console.log(state)
        }
    }, [state])

    const display = () => {
        switch (state) {
            case 1:
                return <Un onClick={handleClick} text={text} langue={langue} />
            case 2:
                return <Deux onClick={handleClick} text={text} langue={langue}/>
            case 3:
                return <Trois onClick={handleClick} text={text} />
            case 4:
                return <Quatre onClick={handleClick} text={text} langue={langue} />
            case 5:
                return <Cinq onClick={handleRedirect} text={text} />
            default:
                return <div>Err</div>
        }
    }

    return (
        <div className={style.root}>
            <div className={style.container}>
                {display()}
            </div>
            {state !== 4 && <div className={style.footer} dangerouslySetInnerHTML={{ __html: text.contact }} />}
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.textReducer.text,
    langue: state.textReducer.langue,
})

export default connect(mapStateToProps, { page })(Consigne)