import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import style from './index.module.css'
import { Typography } from "../Component/styles/typography.styled";
import { Button } from "../Component/button.styled";
import { RangeSlider, RangeNumber } from "../Component/slider.styled";
import { RadioButton } from "../Component/radio.styled";
import { update_form_trial } from '../Redux/Actions/form';

const Trois = ({ slider, onClick, onChange, value }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h4'}>L'information présentée était-elle juste suffisante pour prendre votre décision d'investissement ?</Typography>
                </div>
                <RangeSlider name={''} value={value} onChange={onChange} max={9} />
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

const Deux = ({ slider, onClick, value, onChange }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h4'}>Vous souvenez-vous du <b>niveau de risque</b> indiqué du fonds d'investissement que vous venez de considérer ? Veuillez l'indiquer à l'aide de l'échelle ci-dessous.</Typography>
                </div>
                <div className={style.rangeNumber}>
                    <RangeNumber name={''} max={7} value={value} onChange={onChange}/>
                </div>
            </div>
            <div className={style.button}>
                <Button disabled={slider <= 0} onClick={onClick}>Continuer</Button>
            </div>
        </>
    )
}

const Un = ({ slider, onClick, onChange, value }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h4'}>Veuillez indiquer votre niveau de confiance concernant cette décision sur l'échelle ci-dessous.</Typography>
                </div>
                <RangeSlider name={''} value={value} onChange={onChange} max={9} />
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

const Quatre = ({ slider, onClick, value, onChange }) => {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography variant={'h4'}>Quel type d'information a été le plus important pour votre décision ?</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
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



const Question = ({ nb_trial, update_form_trial }) => {

    const navigate = useNavigate();

    const [value, setValue] = useState('')

    const handleRedirect = () => {
        update_form_trial(value)
        navigate('/stimuli')
    }

    const handleEnd = () => {
        update_form_trial(value)
        navigate('/scale')
    }

    return (
        <div className={style.root}>
            {nb_trial === 1 ? (
                <Un onClick={handleRedirect} onChange={(e) => setValue(e.target.value)} value={value} />
            ) : (
                <div className={style.root}>
                    {nb_trial === 6 ? (
                        <Deux onClick={handleRedirect} onChange={(e) => setValue(e.target.value)} value={value}/>
                    ) : (
                        <div className={style.root}>
                            {nb_trial === 7 ? (
                                <Trois onClick={handleRedirect} onChange={(e) => setValue(e.target.value)} value={value}/>
                            ) : (
                                <div className={style.root}>
                                    {nb_trial === 12 ? (
                                        <Quatre onClick={handleEnd} onChange={(e) => setValue(e.target.value)} value={value}/>
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


export default connect(mapStateToProps, { update_form_trial })(Question)