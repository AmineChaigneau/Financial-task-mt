import style from './index.module.css'
import { Typography } from '../Component/styles/typography.styled'
import { RangeSlider } from '../Component/slider.styled'
import { useState } from 'react'
import { Button } from '../Component/button.styled'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { page } from '../Redux/Actions/export'
import { update_temporal_scale } from '../Redux/Actions/form'

const Scale = ({ name, labels, header, value, onChange, handleNext, text }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: header }} />
            </div>
            <div className={style.slider}>
                <RangeSlider name={name} max={7} value={value} onChange={onChange} />
                <div className={style.label}>
                    {labels.map((label, index) =>
                        <p key={index} className={style.scaleLabel}>{label}</p>
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
                <RangeSlider name={name} max={7} value={value} onChange={onChange} />
                <div className={style.label}>
                    {labels.map((label, index) =>
                        <p key={index} className={style.scaleLabel}>{label}</p>
                    )}
                </div>
            </div>
            <div className={style.button}>
                <Button onClick={handleNext} disabled={!value.trim().length}>{text.button}</Button>
            </div>
        </>
    )
}


const Temporal = ({ text, page, langue, subject_id, update_temporal_scale }) => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        temp1: '',
        temp2: '',
        temp3: '',
        temp4: '',
        temp5: '',
        temp6: '',
        temp7: '',
        temp8: '',
        temp9: '',
        temp10: '',
        temp11: '',
        temp12: ''
    })

    const [state, setState] = useState(1);

    const [start, setStart] = useState(false);

    const display = () => {
        switch (state) {
            case 1:
                return <Scale name={'temp1'} labels={text.temporal_label} header={text.temporal1} value={data.temp1} onChange={(e) => setData({ ...data, temp1: e.target.value })} handleNext={handleNext} text={text} />
            case 2:
                return <ScaleDeux name={'temp2'} labels={text.temporal_label} header={text.temporal2} value={data.temp2} onChange={(e) => setData({ ...data, temp2: e.target.value })} handleNext={handleNext} text={text} />
            case 3:
                return <Scale name={'temp3'} labels={text.temporal_label} header={text.temporal3} value={data.temp3} onChange={(e) => setData({ ...data, temp3: e.target.value })} handleNext={handleNext} text={text} />
            case 4:
                return <ScaleDeux name={'temp4'} labels={text.temporal_label} header={text.temporal4} value={data.temp4} onChange={(e) => setData({ ...data, temp4: e.target.value })} handleNext={handleNext} text={text} />
            case 5:
                return <Scale name={'temp5'} labels={text.temporal_label} header={text.temporal5} value={data.temp5} onChange={(e) => setData({ ...data, temp5: e.target.value })} handleNext={handleNext} text={text} />
            case 6:
                return <ScaleDeux name={'temp6'} labels={text.temporal_label} header={text.temporal6} value={data.temp6} onChange={(e) => setData({ ...data, temp6: e.target.value })} handleNext={handleNext} text={text} />
            case 7:
                return <Scale name={'temp7'} labels={text.temporal_label} header={text.temporal7} value={data.temp7} onChange={(e) => setData({ ...data, temp7: e.target.value })} handleNext={handleNext} text={text} />
            case 8:
                return <ScaleDeux name={'temp8'} labels={text.temporal_label} header={text.temporal8} value={data.temp8} onChange={(e) => setData({ ...data, temp8: e.target.value })} handleNext={handleNext} text={text} />
            case 9:
                return <Scale name={'temp9'} labels={text.temporal_label} header={text.temporal9} value={data.temp9} onChange={(e) => setData({ ...data, temp9: e.target.value })} handleNext={handleNext} text={text} />
            case 10:
                return <ScaleDeux name={'temp10'} labels={text.temporal_label} header={text.temporal10} value={data.temp10} onChange={(e) => setData({ ...data, temp10: e.target.value })} handleNext={handleNext} text={text} />
            case 11:
                return <Scale name={'temp11'} labels={text.temporal_label} header={text.temporal11} value={data.temp11} onChange={(e) => setData({ ...data, temp11: e.target.value })} handleNext={handleNext} text={text} />
            case 12:
                return <ScaleDeux name={'temp12'} labels={text.temporal_label} header={text.temporal12} value={data.temp12} onChange={(e) => setData({ ...data, temp12: e.target.value })} handleNext={handleRedirect} text={text} />
            default:
                return <div>Err...</div>
        }
    }

    const handleRedirect = () => {
        update_temporal_scale({ subject_id: subject_id, form: data })
        navigate('/end')
        page();
    }

    const handleNext = () => {
        setState(state + 1);
        page();
    }

    return (
        <div className={style.root}>
            {start ? (
                <>
                    <div className={style.header}>
                        {langue === 'it' ? (
                            <>
                                {state < 11 && <Typography variant={'h5'} dangerouslySetInnerHTML={{ __html: text.temporal_header }} />}
                            </>
                        ) : (
                            <Typography variant={'h5'} dangerouslySetInnerHTML={{ __html: text.temporal_header }} />
                        )}
                    </div>
                    <div className={style.container}>
                        {langue === 'it' ? (
                            <>
                                {state === 11 ? (
                                    <div>
                                        <Button onClick={handleRedirect}>{text.button}</Button>
                                    </div>
                                ) : (
                                    <>
                                        {display()}
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                {display()}
                            </>
                        )}
                    </div>
                </>
            ) : (
                <div className={style.intro}>
                    {/* <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.intro_test }} /> */}
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.temporal_header }} />
                    <Button onClick={() => setStart(true)}>
                        {text.button}
                    </Button>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
    text: state.textReducer.text,
    langue: state.textReducer.langue,
})

export default connect(mapStateToProps, { page, update_temporal_scale })(Temporal)