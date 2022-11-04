import { RangeSlider } from "../Component/slider.styled";
import { useState } from "react";
import style from './index.module.css'
import { Typography } from "../Component/styles/typography.styled";
import { Button } from "../Component/button.styled";
import { TextArea } from "../Component/textarea.styled";
import { useNavigate } from 'react-router-dom';

const Risk = () => {

    // const [value, setValue] = useState(50);

    const navigate = useNavigate()

    const [slider, setSlider] = useState(0);

    const [game, setGame] = useState(false)

    const [err, setErr] = useState(false)

    const [formData, setFormData] = useState({
        essai1: '',
        essai2: '',
    })

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const re = /^[0-9\b]+$/;

        if (value === '' || re.test(value)) {
            setFormData({
                ...formData,
                [name]: value
            });
            setErr(false)
        } else {
            setErr(true)
        }
    }

    const handleChangeSlide = e => {
        setSlider(e.target.value)
    }

    const handleClick = () => {
        setGame(true)
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(slider)
        console.log(formData)
        navigate('/consigne')
    }

    return (
        <div className={style.root}>
            {!game ? (
                <>
                    <div className={style.container}>
                        <div className={style.header}>
                            <Typography variant={'h4'}><b>Dans quelle mesure êtes-vous prêt à prendre des risques, en général ?</b> <i>Avant de répondre, prenez un moment pour réfléchir à votre expérience et aux décisions que vous avez prises dans différents domaines (éducation, relations, santé, achats, investissement, etc.) et différents moments de votre vie.</i></Typography>
                        </div>
                        <RangeSlider name={'risk'} max={10} value={slider} onChange={(e) => handleChangeSlide(e)} />
                        {/* <Slider onInput={e => setValue(e.target.value)} value={value} /> */}
                        <div className={style.label}>
                            <p>Pas du tout envie de prendre des risques</p>
                            <p>Pleinement prêt à prendre des risques</p>
                        </div>
                    </div>
                    <div>
                        <Button disabled={slider <= 0} onClick={handleClick}>Continuer</Button>
                    </div>
                </>
            ) : (
                <div className={style.containerEssai}>
                    <div className={style.header}>
                        <Typography variant={'h4'}>
                            Vous allez participez à <b>un petit jeu rapide</b> avant de poursuivre vers l'expérimentation.
                            Une fois le jeu terminé, vous devez rentrer manuellement votre performance dans les zones ci dessous.
                        </Typography>
                    </div>
                    <form className={style.content} onSubmit={e => onSubmit(e)}>
                        <div className={style.area}>
                            <p className={style.lab}>Essai n°1</p>
                            <TextArea id='essai1' name='essai1' onChange={handleChange} />
                        </div>
                        <div className={style.area}>
                            <p className={style.lab}>Essai n°2</p>
                            <TextArea id='essai2' name='essai2' onChange={handleChange} />
                        </div>
                        <div className={style.err}>
                            {err ? (<p>Uniquement des nombres</p>) : (<></>)}
                        </div>
                        <div>
                            <Button type='submit' disabled={
                                !formData.essai1.trim().length
                                || !formData.essai2.trim().length
                            }>Continuer</Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Risk;