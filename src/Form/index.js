import { Button } from "../Component/button.styled"
import { RadioButton } from "../Component/radio.styled"
import { Typography } from "../Component/styles/typography.styled"
import { useState } from "react"
import style from './index.module.css'
import { connect } from 'react-redux'
import { update_form } from '../Redux/Actions/form'
import { useNavigate } from 'react-router-dom'

const ScaleItem = ({ label, value, onChange, text }) => {

    return (
        <div className={style.form}>
            <Typography variant={'h4'}>{label}</Typography>
            <form className={style.wrapperRadio} name={label} value={value} onChange={onChange}>
                <div className={style.radio}>
                    <RadioButton value={'1'} label={""} />
                    <p>{text.bulshit_label[0]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'2'} label={""} />
                    <p>{text.bulshit_label[1]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'3'} label={""} />
                    <p>{text.bulshit_label[2]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'4'} label={""} />
                    <p>{text.bulshit_label[3]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'5'} label={""} />
                    <p>{text.bulshit_label[4]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'6'} label={""} />
                    <p>{text.bulshit_label[5]}</p>
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

const Form = ({ update_form, subject_id, text }) => {

    const navigate = useNavigate();

    const [options, setOptions] = useState([
        { label: text.bulshit1, value: '' },
        { label: text.bulshit2, value: '' },
        { label: text.bulshit3, value: '' },
        { label: text.bulshit4, value: '' },
        { label: text.bulshit5, value: '' },
        { label: text.bulshit6, value: '' },
        { label: text.bulshit7, value: '' },
        { label: text.bulshit8, value: '' },
        { label: text.bulshit9, value: '' },
        { label: text.bulshit10, value: '' },
        { label: text.bulshit11, value: '' },
        { label: text.bulshit12, value: '' },
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
            <Typography dangerouslySetInnerHTML={{__html: text.bulshit_corps }} />
            </div>
            <div className={style.scale}>
                {options.map((option, index) =>
                    <div className={style.wrapper} key={index}>
                        <ScaleItem label={option.label} value={option.value} onChange={updateSelection(index)} text={text} />
                        <Divider />
                    </div>
                )}
            </div>
            <div className={style.button}>
                <Button disabled={!completed} onClick={handleRedirect}>
                    {text.button}
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
    text: state.textReducer.text,
})

export default connect(mapStateToProps, { update_form })(Form)