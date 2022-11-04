import { Button } from "../Component/button.styled"
import { RadioButton } from "../Component/radio.styled"
import { Typography } from "../Component/styles/typography.styled"
import { useState } from "react"
import style from './index.module.css'
import { connect } from 'react-redux'
import { update_form } from '../Redux/Actions/form'
import { useNavigate } from 'react-router-dom'

const ScaleItem = ({ label, value, onChange }) => {

    return (
        <div className={style.form}>
            <Typography variant={'h4'}>{label}</Typography>
            <form className={style.wrapperRadio} name={label} value={value} onChange={onChange}>
                <div className={style.radio}>
                    <RadioButton value={'1'} label={""} />
                    <p>Pas du tout significatif / Ne vaut pas du tout la peine d'être considéré</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'2'} label={""} />
                    <p><i>Très peu</i> significatif / Vaut peu la peine d'être considéré</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'3'} label={""} />
                    <p><i>Légèrement</i> significatif / Vaut légèrement la peine d'être considéré</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'4'} label={""} />
                    <p><i>Plutôt</i> significatif / Vaut plutôt la peine d'être considéré</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'5'} label={""} />
                    <p>Significatif / Vaut la peine d'être considéré</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'6'} label={""} />
                    <p>Très significatif / Vaut largement la peine d'être considéré</p>
                </div>
                <div className={style.sliderBar}></div>
            </form>
        </div>
    )
}

const Divider = () => {
    return (
        <div className={style.divider}></div>
    )
}

const Form = ({ update_form, subject_id }) => {

    const navigate = useNavigate();

    const [options, setOptions] = useState([
        { label: "Un imbécile et son argent sont bientôt séparés", value: '' },
        { label: "Un budget nous indique ce que nous ne pouvons pas nous offrir, mais il ne nous empêche pas de l'acheter.", value: '' },
        { label: "La finance ne consiste pas seulement à faire de l'argent. Il s'agit de réaliser nos objectifs profonds et de protéger le fruit de notre travail.", value: '' },
        { label: "Chaque que fois que vous empruntez de l'argent, vous vous volez dans votre futur.", value: '' },
        { label: "L'inflation est une taxation sans législation.", value: '' },
        { label: "La richesse n'est pas à celui qui la possède, mais à celui qui en jouit.", value: '' },
        { label: "Un prêt bon marché est au-delà de tout nouveau destin.", value: '' },
        { label: "Votre argent transforme des actions universelles.", value: '' },
        { label: "L'argent allège les coûts de ceux qui empruntent.", value: '' },
        { label: "La richesse et la persévérance fournissent de l'argent au pauvre.", value: '' },
        { label: "Les bons investisseurs répartissent les grandes actions au-delà de la taille.", value: '' },
        { label: "La liberté et l'espace transforment le sens abstrait de l'argent.", value: '' }
    ]);

    const [completed, setCompleted] = useState(false)

    const isCompleted = (currentValue) => currentValue.value.trim().length

    const updateSelection = index => e => {
        let newArr = [...options];
        newArr[index] = { ...newArr[index], value: e.target.value }

        setOptions(newArr);

        setCompleted(newArr.every(isCompleted))
    };

    const handleRedirect = () => {
        update_form({ subject_id: subject_id, form: options, time: 0 })
        navigate('/End')
    }

    return (
        <div className={style.root}>
            <div className={style.regle}>
                <Typography variant={'h4'}>Avant de débuter l'exeprimentation, vous devez remplir un rapide petit questionnaire.</Typography>
                <Typography>Veuillez évaluer <b>le niveau de signification des phrases suivantes</b> concernant les finances à l'aide d'une échelle de six points donnée.</Typography>
            </div>
            <div className={style.scale}>
                {options.map((option, index) =>
                    <div className={style.wrapper} key={index}>
                        <ScaleItem label={option.label} value={option.value} onChange={updateSelection(index)} />
                        <Divider />
                    </div>
                )}
            </div>
            <div className={style.button}>
                <Button disabled={!completed} onClick={handleRedirect}>
                    Continuer
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id
})

export default connect(mapStateToProps, { update_form })(Form)