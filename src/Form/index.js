import { Button } from "../Component/button.styled"
import { RadioButton } from "../Component/radio.styled"
import { Typography } from "../Component/styles/typography.styled"
import { useState } from "react"
import style from './index.module.css'
import { connect } from 'react-redux'
import { update_form } from '../Redux/Actions/form'
import { useNavigate } from 'react-router-dom'
import { page } from '../Redux/Actions/export'

const ScaleItem = ({ label, value, onChange, text, handleChange }) => {

    return (
        <div className={style.form}>
            <Typography variant={'h4'}>{label}</Typography>
            <form className={style.wrapperRadio} name={label} value={value} onChange={onChange}>
                <div className={style.radio}>
                    <RadioButton value={'1'} label={""} checked={value === '1'} onChange={handleChange}/>
                    <p>{text.bulshit_label[0]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'2'} label={""} checked={value === '2'} onChange={handleChange}/>
                    <p>{text.bulshit_label[1]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'3'} label={""} checked={value === '3'} onChange={handleChange}/>
                    <p>{text.bulshit_label[2]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'4'} label={""} checked={value === '4'} onChange={handleChange}/>
                    <p>{text.bulshit_label[3]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'5'} label={""} checked={value === '5'} onChange={handleChange}/>
                    <p>{text.bulshit_label[4]}</p>
                </div>
                <div className={style.radio}>
                    <RadioButton value={'6'} label={""} checked={value === '6'} onChange={handleChange}/>
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

function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    function next() {
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
    }

    function prev() {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    }

    function jump(page) {
        const pageNumber = Math.max(1, page);
        setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
    }

    return { next, prev, jump, currentData, currentPage, maxPage };
}

const Form = ({ update_form, subject_id, text, page}) => {

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

    const [completed, setCompleted] = useState(false);

    const _DATA = usePagination(options, 1);

    let [state, setState] = useState(0);

    const handleNext = () => {
        setState(state + 1);
        page();
        _DATA.next();
    };


    const isCompleted = (currentValue) => currentValue.value.trim().length

    const updateSelection = index => e => {
        let newArr = [...options];
        newArr[index] = { ...newArr[index], value: e.target.value }

        setOptions(newArr);

        console.log(newArr)

        setCompleted(newArr.every(isCompleted))
    };

    const handleRedirect = () => {
        update_form({ subject_id: subject_id, form: options, time: 0 })
        page();
        navigate('/End')
    }

    return (
        <div className={style.root}>
            <div className={style.regle}>
                <Typography dangerouslySetInnerHTML={{ __html: text.bulshit_corps }} />
            </div>
            <div className={style.scale}>
                {/* {options.map((option, index) =>
                    <div className={style.wrapper} key={index}>
                        <ScaleItem label={option.label} value={option.value} onChange={updateSelection(index)} text={text} />
                        <Divider />
                    </div>
                )} */}
                {_DATA.currentData().map((option, index) =>
                    <div className={style.wrapper} key={index}>
                        <ScaleItem label={option.label} value={option.value} checked={option.checked} onChange={updateSelection(index + state)} text={text} handleChange={() => console.log('')}/>
                        <Divider />
                    </div>
                )}
            </div>
            <div className={style.button}>
                {state === 11 ? (
                    <Button disabled={!completed} onClick={handleRedirect}>
                        {text.button}
                    </Button>
                ) : (
                    <Button disabled={!options[state].value.trim().length} onClick={handleNext}>
                        {text.next}
                    </Button>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
    text: state.textReducer.text,
})

export default connect(mapStateToProps, { update_form, page })(Form)