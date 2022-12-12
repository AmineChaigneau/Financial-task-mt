import style from './index.module.css'
import { Typography } from '../Component/styles/typography.styled'
import { RangeSlider } from '../Component/slider.styled'
import { useState } from 'react'
import { Button } from '../Component/button.styled'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { page } from '../Redux/Actions/export'
import { update_distress_scale } from '../Redux/Actions/form'

const Scale = ({ name, labels, header, value, onChange, handleNext, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: header }} />
            </div>
            <div className={style.slider}>
                <RangeSlider name={name} max={10} value={value} onChange={onChange} />
                <div className={style.label}>
                    {labels.map((label, index) =>
                        <p key={index} className={style.scaleLabel} style={{ marginLeft: index <= 1 ? 15 : 0, marginRight: index >= 2 ? 15 : 0 }}>{label}</p>
                    )}
                </div>
            </div>
            <div className={style.button}>
                <Button onClick={handleNext} disabled={!value.trim().length}>{text.button}</Button>
            </div>
        </>
    )
}

const ScaleDeux = ({ name, labels, header, value, onChange, handleNext, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: header }} />
            </div>
            <div className={style.slider}>
                <RangeSlider name={name} max={10} value={value} onChange={onChange} />
                <div className={style.label}>
                    {labels.map((label, index) =>
                        <p key={index} className={style.scaleLabel} style={{ marginLeft: index <= 1 ? 15 : 0, marginRight: index >= 2 ? 15 : 0 }}>{label}</p>
                    )}
                </div>
            </div>
            <div className={style.button}>
                <Button onClick={handleNext} disabled={!value.trim().length}>{text.button}</Button>
            </div>
        </>
    )
}

const Distress = ({ subject_id, text, page, update_distress_scale }) => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        diss1: '',
        diss2: '',
        diss3: '',
        diss4: '',
        diss5: '',
        diss6: '',
        diss7: '',
        diss8: ''
    })

    const [state, setState] = useState(1);

    const [start, setStart] = useState(false);

    const display = () => {
        switch (state) {
            case 1:
                return <Scale name={'diss1'} labels={text.distress_label1} header={text.distress1} value={data.diss1} onChange={(e) => setData({ ...data, diss1: e.target.value })} handleNext={handleNext} text={text} />
            case 2:
                return <ScaleDeux name={'diss2'} labels={text.distress_label2} header={text.distress2} value={data.diss2} onChange={(e) => setData({ ...data, diss2: e.target.value })} handleNext={handleNext} text={text} />
            case 3:
                return <Scale name={'diss3'} labels={text.distress_label3} header={text.distress3} value={data.diss3} onChange={(e) => setData({ ...data, diss3: e.target.value })} handleNext={handleNext} text={text} />
            case 4:
                return <ScaleDeux name={'diss4'} labels={text.distress_label4} header={text.distress4} value={data.diss4} onChange={(e) => setData({ ...data, diss4: e.target.value })} handleNext={handleNext} text={text} />
            case 5:
                return <Scale name={'diss5'} labels={text.distress_label5} header={text.distress5} value={data.diss5} onChange={(e) => setData({ ...data, diss5: e.target.value })} handleNext={handleNext} text={text} />
            case 6:
                return <ScaleDeux name={'diss6'} labels={text.distress_label6} header={text.distress6} value={data.diss6} onChange={(e) => setData({ ...data, diss6: e.target.value })} handleNext={handleNext} text={text} />
            case 7:
                return <Scale name={'diss7'} labels={text.distress_label7} header={text.distress7} value={data.diss7} onChange={(e) => setData({ ...data, diss7: e.target.value })} handleNext={handleNext} text={text} />
            case 8:
                return <ScaleDeux name={'diss8'} labels={text.distress_label8} header={text.distress8} value={data.diss8} onChange={(e) => setData({ ...data, diss8: e.target.value })} handleNext={handleRedirect} text={text} />
            default:
                return <div>Err</div>
        }
    }

    const handleNext = () => {
        setState(state + 1);
        page();
    }

    const handleRedirect = () => {
        update_distress_scale({ subject_id: subject_id, form: data })
        navigate('/temporal')
        page();
    }

    return (
        <div className={style.root}>
            {start ? (
                <>
                    <div className={style.header}>
                        <Typography variant={'h5'} dangerouslySetInnerHTML={{ __html: text.distress_header }} />
                    </div>
                    <div className={style.container}>
                        {display()}
                    </div>
                </>
            ) : (
                <>
                    <div className={style.intro}>
                        {/* <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.intro_test }} /> */}
                        <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.distress_header }} />
                        <Button onClick={() => setStart(true)}>
                            {text.button}
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
    text: state.textReducer.text,
})

export default connect(mapStateToProps, { page, update_distress_scale })(Distress)