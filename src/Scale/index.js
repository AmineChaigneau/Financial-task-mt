import style from './index.module.css'
import { Typography } from '../Component/styles/typography.styled'
import { RangeSlider } from '../Component/slider.styled'
import { useState } from 'react'
import { Button } from '../Component/button.styled'
import { RadioButton } from '../Component/radio.styled'
import { useNavigate } from 'react-router-dom';
import { update_question_scale } from '../Redux/Actions/form'
import { connect } from 'react-redux'

const Un = ({ value, onChange, text }) => {

    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_un}</Typography>
            </div>
            <RangeSlider name={'r1'} max={10} value={value} onChange={onChange} />
            <div className={style.label}>
                <p>{text.scale_un_value[0]}</p>
                <p>{text.scale_un_value[1]}</p>
            </div>
        </>
    )
}

const Deux = ({ value, onChange, text }) => {

    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_deux}</Typography>
            </div>
            <RangeSlider name={''} max={10} value={value} onChange={onChange} />
            <div className={style.label}>
                <p>{text.scale_deux_value[0]}</p>
                <p>{text.scale_deux_value[1]}</p>
            </div>
        </>
    )
}

const Trois = ({ value, onChange, text }) => {

    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_trois}</Typography>
            </div>
            <RangeSlider name={''} max={10} value={value} onChange={onChange} />
            <div className={style.label}>
                <p>{text.scale_trois_value[0]}</p>
                <p>{text.scale_trois_value[1]}</p>
            </div>
        </>
    )
}

const Quatre = ({ value, onChange, text }) => {

    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_quatre}</Typography>
            </div>
            <RangeSlider name={''} max={10} value={value} onChange={onChange} />
            <div className={style.label}>
                <p>{text.scale_quatre_value[0]}</p>
                <p>{text.scale_quatre_value[1]}</p>
            </div>
        </>
    )
}

const Cinq = ({ value, onChange, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_cinq}</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={text.scale_cinq_value[0]} />
                <RadioButton value={'2'} label={text.scale_cinq_value[1]} />
                <RadioButton value={'3'} label={text.scale_cinq_value[2]} />
                <RadioButton value={'4'} label={text.scale_cinq_value[3]} />
                <RadioButton value={'5'} label={text.scale_cinq_value[4]} />
            </form>
        </>
    )
}

const Six = ({ value, onChange, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_six}</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={text.scale_six_value[0]} />
                <RadioButton value={'2'} label={text.scale_six_value[1]} />
                <RadioButton value={'3'} label={text.scale_six_value[2]} />
                <RadioButton value={'4'} label={text.scale_six_value[3]} />
                <RadioButton value={'5'} label={text.scale_six_value[4]} />
            </form>
        </>
    )
}

const Sept = ({ value, onChange, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_sept}</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={text.scale_sept_value[0]} />
                <RadioButton value={'2'} label={text.scale_sept_value[1]} />
                <RadioButton value={'3'} label={text.scale_sept_value[2]} />
                <RadioButton value={'4'} label={text.scale_sept_value[3]} />
                <RadioButton value={'5'} label={text.scale_sept_value[4]} />
                <RadioButton value={'6'} label={text.scale_sept_value[5]} />
            </form>
        </>
    )
}

const Huit = ({ value, onChange, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_huit}</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={text.scale_neuf_huit_value[0]} />
                <RadioButton value={'2'} label={text.scale_neuf_huit_value[1]} />
                <RadioButton value={'3'} label={text.scale_neuf_huit_value[2]} />
                <RadioButton value={'4'} label={text.scale_neuf_huit_value[3]} />
            </form>
        </>
    )
}

const Neuf = ({ value, onChange, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_neuf}</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={text.scale_neuf_huit_value[0]} />
                <RadioButton value={'2'} label={text.scale_neuf_huit_value[1]} />
                <RadioButton value={'3'} label={text.scale_neuf_huit_value[2]} />
                <RadioButton value={'4'} label={text.scale_neuf_huit_value[3]} />
            </form>
        </>
    )
}

const Dix = ({ value, onChange, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_dix}</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={text.scale_dix_value[0]} />
                <RadioButton value={'2'} label={text.scale_dix_value[1]} />
                <RadioButton value={'3'} label={text.scale_dix_value[2]} />
            </form>
        </>
    )
}

const Onze = ({ value, onChange, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_onze}</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={text.scale_onze_value[0]} />
                <RadioButton value={'2'} label={text.scale_onze_value[1]} />
                <RadioButton value={'3'} label={text.scale_onze_value[2]} />
            </form>
        </>
    )
}

const Douze = ({ value, onChange, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>{text.scale_douze}</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={text.scale_douze_value[0]} />
                <RadioButton value={'2'} label={text.scale_douze_value[1]} />
                <RadioButton value={'3'} label={text.scale_douze_value[2]} />
            </form>
        </>
    )
}

const Scale = ({ subject_id, update_question_scale, text }) => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        r1: '',
        r2: '',
        r3: '',
        r4: '',
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        l1: '',
        l2: '',
        l3: ''
    })

    const [page, setPage] = useState(1);

    const display = () => {
        switch (page) {
            case 1:
                return <Un value={data.r1} onChange={(e) => setData({ ...data, r1: e.target.value })} text={text} />
            case 2:
                return <Deux value={data.r2} onChange={(e) => setData({ ...data, r2: e.target.value })} text={text} />
            case 3:
                return <Trois value={data.r3} onChange={(e) => setData({ ...data, r3: e.target.value })} text={text} />
            case 4:
                return <Quatre value={data.r4} onChange={(e) => setData({ ...data, r4: e.target.value })} text={text} />
            case 5:
                return <Cinq value={data.q1} onChange={(e) => setData({ ...data, q1: e.target.value })} text={text} />
            case 6:
                return <Six value={data.q2} onChange={(e) => setData({ ...data, q2: e.target.value })} text={text} />
            case 7:
                return <Sept value={data.q3} onChange={(e) => setData({ ...data, q3: e.target.value })} text={text} />
            case 8:
                return <Huit value={data.q4} onChange={(e) => setData({ ...data, q4: e.target.value })} text={text} />
            case 9:
                return <Neuf value={data.q5} onChange={(e) => setData({ ...data, q5: e.target.value })} text={text} />
            case 10:
                return <Dix value={data.l1} onChange={(e) => setData({ ...data, l1: e.target.value })} text={text} />
            case 11:
                return <Onze value={data.l2} onChange={(e) => setData({ ...data, l2: e.target.value })} text={text} />
            case 12:
                return <Douze value={data.l3} onChange={(e) => setData({ ...data, l3: e.target.value })} text={text} />
            default:
                return <Typography variant={'h4'}>{text.scale_corps1}</Typography>
        }
    }

    const handleNext = () => {
        setPage(page + 1);
    }

    const handleRedirect = () => {
        update_question_scale({ subject_id: subject_id, form: data })
        navigate('/form')
        // push state
    }

    return (
        <div className={style.root}>
            <div className={style.header}>
                <Typography variant={'h4'}><i>{text.scale_corps}</i></Typography>
            </div>
            <div className={style.container}>
                {display()}
            </div>
            <div className={style.button}>
                {page <= 12 ? (
                    <Button onClick={handleNext}>{text.button}</Button>
                ) : (
                    <div>
                        <Button onClick={handleRedirect}>{text.button}</Button>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
    text: state.textReducer.text,
})

export default connect(mapStateToProps, { update_question_scale })(Scale)