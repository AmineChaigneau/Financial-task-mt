import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Component/button.styled'
import { Select } from '../Component/select.styled'
import { Typography } from '../Component/styles/typography.styled'
import { TextArea } from '../Component/textarea.styled'
import style from './index.module.css'
import { update_formulaire } from '../Redux/Actions/form'
import { connect } from 'react-redux'
import { page } from '../Redux/Actions/export'

const Formulaire = ({ subject_id, update_formulaire, text, page }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        age: '',
        genre: '',
        profession: '',
        main: '',
        souris: '',
        accept: false
    })

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        update_formulaire({form : formData, subject_id: subject_id})
        page();
        navigate('/calibration')
    }

    return (
        <div className={style.root}>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.form_title}</Typography>
            </div>
            <div className={style.consigne}>
                <Typography>{text.form_corps1}</Typography>
            </div>
            <form onSubmit={e => onSubmit(e)} className={style.form}>
                <div className={style.content}>
                    <Select id='age' name='age' onChange={handleChange}>
                        <option value={''}>{text.form_age} *</option>
                        <option value={20}>15-20</option>
                        <option value={25}>21-25</option>
                        <option value={30}>26-30</option>
                        <option value={35}>31-35</option>
                        <option value={40}>36-40</option>
                        <option value={45}>41-45</option>
                        <option value={50}>46-50</option>
                        <option value={55}>51-55</option>
                        <option value={60}>56-60</option>
                        <option value={65}>61-65</option>
                        <option value={70}>66-70</option>
                        <option value={75}>70+</option>
                    </Select>
                </div>
                <div className={style.content}>
                    <Select id='genre' name='genre' onChange={handleChange}>
                        <option value={''}>{text.form_genre[0]} *</option>
                        <option value={'M'}>{text.form_genre[1]}</option>
                        <option value={'F'}>{text.form_genre[2]}</option>
                        <option value={'S'}>{text.form_genre[3]}</option>
                    </Select>
                </div>
                <div className={style.content}>
                    <p className={style.label}>{text.form_prof}</p>
                    <TextArea id='profession' name='profession' onChange={handleChange}></TextArea>
                </div>
                <div className={style.content}>
                    <Select label="Quelle est votre main dominante ?" id='main' name='main' onChange={handleChange}>
                        <option value={''}>{text.form_main[0]} *</option>
                        <option value={'d'}>{text.form_main[1]}</option>
                        <option value={'g'}>{text.form_main[2]}</option>
                    </Select>
                </div>
                <div className={style.content}>
                    <Select label="Quelle est votre main sur la souris ?" id='souris' name='souris' onChange={handleChange}>
                        <option value={''}>{text.form_souris[0]} *</option>
                        <option value={'d'}>{text.form_souris[1]}</option>
                        <option value={'g'}>{text.form_souris[2]}</option>
                    </Select>
                </div>
                <div className={style.button}>
                    <Typography dangerouslySetInnerHTML={{__html: text.form_accept }} />
                    <Button type='submit'
                        disabled={
                            !formData.age.trim().length
                            || !formData.genre.trim().length
                            || !formData.main.trim().length
                            || !formData.souris.trim().length
                        }
                    >
                        {text.button2}
                    </Button>
                </div>
            </form>
        </div>
    )
}


const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
    text: state.textReducer.text,
})


export default connect(mapStateToProps, { update_formulaire, page })(Formulaire);