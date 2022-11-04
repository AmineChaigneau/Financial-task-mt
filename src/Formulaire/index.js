import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Component/button.styled'
import { Select } from '../Component/select.styled'
import { Typography } from '../Component/styles/typography.styled'
import { TextArea } from '../Component/textarea.styled'
import style from './index.module.css'
import { update_formulaire } from '../Redux/Actions/form'
import { connect } from 'react-redux'

const Formulaire = ({ subject_id, update_formulaire }) => {

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
        navigate('/calibration')
    }

    return (
        <div className={style.root}>
            <div className={style.header}>
                <Typography variant={'h4'}>Informations nécessaires</Typography>
            </div>
            <div className={style.consigne}>
                <Typography>Veuillez compléter le formulaire ci dessous. Les informations resterons anonymes et confidentielles.</Typography>
            </div>
            <form onSubmit={e => onSubmit(e)} className={style.form}>
                <div className={style.content}>
                    <Select id='age' name='age' onChange={handleChange}>
                        <option value={''}>Âge *</option>
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
                        <option value={''}>Genre *</option>
                        <option value={'M'}>Homme</option>
                        <option value={'F'}>Femme</option>
                        <option value={'S'}>Autre</option>
                    </Select>
                </div>
                <div className={style.content}>
                    <p className={style.label}>Quelle est votre profession ?</p>
                    <TextArea id='profession' name='profession' onChange={handleChange}></TextArea>
                </div>
                <div className={style.content}>
                    <Select label="Quelle est votre main dominante ?" id='main' name='main' onChange={handleChange}>
                        <option value={''}>Main dominante *</option>
                        <option value={'d'}>Droite</option>
                        <option value={'g'}>Gauche</option>
                    </Select>
                </div>
                <div className={style.content}>
                    <Select label="Quelle est votre main sur la souris ?" id='souris' name='souris' onChange={handleChange}>
                        <option value={''}>Main sur la souris *</option>
                        <option value={'d'}>Droite</option>
                        <option value={'g'}>Gauche</option>
                    </Select>
                </div>
                <div className={style.button}>
                    <Typography>En poursuivant, je donne mon consentement à l'utilisation des données me concernant sous forme anonyme et agrégée, à des fins de recherche scientifique.</Typography>
                    <Typography>J'accepte volontairement de participer à l'étude et je comprends que je peux me retirer de l'étude à tout moment, sans donner d'explications.</Typography>
                    <Button type='submit'
                        disabled={
                            !formData.age.trim().length
                            || !formData.genre.trim().length
                            || !formData.main.trim().length
                            || !formData.souris.trim().length
                        }
                    >
                        Valider
                    </Button>
                </div>
            </form>
        </div>
    )
}


const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id
})


export default connect(mapStateToProps, { update_formulaire })(Formulaire);