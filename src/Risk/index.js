import { RangeSlider } from "../Component/slider.styled";
import { useState } from "react";
import style from './index.module.css'
import { Typography } from "../Component/styles/typography.styled";
import { Button } from "../Component/button.styled";
import { TextArea } from "../Component/textarea.styled";
import { useNavigate } from 'react-router-dom';
import { update_risk_scale } from '../Redux/Actions/form'
import { connect } from "react-redux";
import { page } from '../Redux/Actions/export'

const Risk = ({ subject_id, update_risk_scale, text, page }) => {

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
        page();
    }

    const onSubmit = e => {
        e.preventDefault();
        update_risk_scale({ subject_id: subject_id, form: formData, slider: slider})
        page();
        navigate('/consigne')
    }

    return (
        <div className={style.root}>
            {!game ? (
                <>
                    <div className={style.container}>
                        <div className={style.header}>
                            <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.risk_question }}/>
                        </div>
                        <RangeSlider name={'risk'} max={10} value={slider} onChange={(e) => handleChangeSlide(e)} />
                        {/* <Slider onInput={e => setValue(e.target.value)} value={value} /> */}
                        <div className={style.label}>
                            <p>{text.risk_lab[0]}</p>
                            <p>{text.risk_lab[1]}</p>
                        </div>
                    </div>
                    <div>
                        <Button disabled={slider <= 0} onClick={handleClick}>{text.button}</Button>
                    </div>
                </>
            ) : (
                <div className={style.containerEssai}>
                    <div className={style.header}>
                        <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.risk_corps1 }}/>
                        <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.risk_corps2 }} />
                    </div>
                    <form className={style.content} onSubmit={e => onSubmit(e)}>
                        <div className={style.area}>
                            <p className={style.lab}>{text.risk_form[0]} n°1</p>
                            <TextArea id='essai1' name='essai1' onChange={handleChange} />
                        </div>
                        <div className={style.area}>
                            <p className={style.lab}>{text.risk_form[0]} n°2</p>
                            <TextArea id='essai2' name='essai2' onChange={handleChange} />
                        </div>
                        <div className={style.err}>
                            {err ? (<p>{text.risk_form[1]}</p>) : (<></>)}
                        </div>
                        <div>
                            <Button type='submit' disabled={
                                !formData.essai1.trim().length
                                || !formData.essai2.trim().length
                            }>{text.button}</Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
    text: state.textReducer.text,
})

export default connect(mapStateToProps, { update_risk_scale, page })(Risk);