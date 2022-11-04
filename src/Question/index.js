import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import style from './index.module.css'
import { Typography } from "../Component/styles/typography.styled";
import { Button } from "../Component/button.styled";
import { RangeSlider, RangeNumber } from "../Component/slider.styled";
import { RadioButton } from "../Component/radio.styled";

const Trois = ({ slider, onClick }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h4'}>L'information présentée était-elle juste suffisante pour prendre votre décision d'investissement ?</Typography>
                </div>
                <RangeSlider name={''} max={9} />
                <div className={style.label}>
                    <p>Pas du tout suffisant / Vous auriez besoin d'informations supplémentaire pour prendre une décision</p>
                    <p>Complément suffisant</p>
                </div>
            </div>
            <div className={style.button}>
                <Button disabled={slider <= 0} onClick={onClick}>Continuer</Button>
            </div>
        </>
    )
}

const Deux = ({ slider, onClick }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h4'}>Vous souvenez-vous du <b>niveau de risque</b> indiqué du fonds d'investissement que vous venez de considérer ? Veuillez l'indiquer à l'aide de l'échelle ci-dessous.</Typography>
                </div>
                <div className={style.rangeNumber}>
                    <RangeNumber name={''} max={7} />
                </div>
            </div>
            <div className={style.button}>
                <Button disabled={slider <= 0} onClick={onClick}>Continuer</Button>
            </div>
        </>
    )
}

const Un = ({ slider, onClick }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h4'}>Veuillez indiquer votre niveau de confiance concernant cette décision sur l'échelle ci-dessous.</Typography>
                </div>
                <RangeSlider name={''} max={9} />
                <div className={style.label}>
                    <p>Complétement incertain</p>
                    <p>Complément sûr</p>
                </div>
            </div>
            <div className={style.button}>
                <Button disabled={slider <= 0} onClick={onClick}>Continuer</Button>
            </div>
        </>
    )
}

const Quatre = ({ slider, onClick }) => {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography variant={'h4'}>Quel type d'information a été le plus important pour votre décision ?</Typography>
            </div>
            <form className={style.form}>
                <RadioButton value={'1'} label={"Frais"} />
                <RadioButton value={'2'} label={"Profil de risque et de rendement"} />
                <RadioButton value={'3'} label={"Objectifs et politique d'investissement"} />
                <RadioButton value={'4'} label={"Performances passées"} />
            </form>
            <div className={style.button}>
                <Button disabled={slider <= 0} onClick={onClick}>Continuer</Button>
            </div>
        </div>
    )
}



const Question = ({ nb_trial }) => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        // update
        navigate('/stimuli')
    }

    const handleEnd = () => {
        // update
        navigate('/scale')
    }

    return (
        <div className={style.root}>
            {nb_trial === 1 ? (
                <Un onClick={handleRedirect} />
            ) : (
                <div className={style.root}>
                    {nb_trial === 6 ? (
                        <Deux onClick={handleRedirect} />
                    ) : (
                        <div className={style.root}>
                            {nb_trial === 7 ? (
                                <Trois onClick={handleRedirect} />
                            ) : (
                                <div className={style.root}>
                                    {nb_trial === 12 ? (
                                        <Quatre onClick={handleEnd} />
                                    ) : (
                                        <div>Erreur</div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    nb_trial: state.exportReducer.nb_trial,
})


export default connect(mapStateToProps)(Question)