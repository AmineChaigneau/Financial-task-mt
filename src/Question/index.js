import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import style from './index.module.css'
import { Typography } from "../Component/styles/typography.styled";
import { Button } from "../Component/button.styled";
import { RangeSlider, RangeNumber } from "../Component/slider.styled";
import { page } from '../Redux/Actions/export'
import { update_form_trial, update_form_trial_list } from '../Redux/Actions/form';

const Trois = ({ slider, onClick, onChange, value, text }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h4'}>{text.question_trois_q}</Typography>
                </div>
                <RangeSlider name={''} value={value} onChange={onChange} max={9} />
                <div className={style.label}>
                    <p>{text.question_trois_lab[0]}</p>
                    <p>{text.question_trois_lab[1]}</p>
                </div>
            </div>
            <div className={style.button}>
                <Button disabled={slider <= 0} onClick={onClick}>{text.button}</Button>
            </div>
        </>
    )
}

const Deux = ({ slider, onClick, value, onChange, text }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.question_deux_q }} />
                </div>
                <div className={style.rangeNumber}>
                    <RangeNumber name={''} max={7} value={value} onChange={onChange} />
                </div>
            </div>
            <div className={style.button}>
                <Button disabled={slider <= 0} onClick={onClick}>{text.button}</Button>
            </div>
        </>
    )
}

const Un = ({ slider, onClick, onChange, value, text }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <Typography variant={'h4'}>{text.question_un_q}</Typography>
                </div>
                <RangeSlider name={''} value={value} onChange={onChange} max={9} />
                <div className={style.label}>
                    <p>{text.question_un_lab[0]}</p>
                    <p>{text.question_un_lab[1]}</p>
                </div>
            </div>
            <div className={style.button}>
                <Button disabled={slider <= 0} onClick={onClick}>{text.button}</Button>
            </div>
        </>
    )
}

// const Quatre = ({ slider, onClick, value, onChange }) => {

//     return (
//         <div className={style.container}>
//             <div className={style.header}>
//                 <Typography variant={'h4'}>Quel type d'information a été le plus important pour votre décision ?</Typography>
//             </div>
//             <form className={style.form} value={value} onChange={onChange}>
//                 <RadioButton value={'1'} label={"Frais"} />
//                 <RadioButton value={'2'} label={"Profil de risque et de rendement"} />
//                 <RadioButton value={'3'} label={"Objectifs et politique d'investissement"} />
//                 <RadioButton value={'4'} label={"Performances passées"} />
//             </form>
//             <div className={style.button}>
//                 <Button disabled={slider <= 0} onClick={onClick}>Continuer</Button>
//             </div>
//         </div>
//     )
// }

const Divider = () => {
    return (
        <div className={style.divider}></div>
    )
}

const Question = ({ nb_trial, update_form_trial, update_form_trial_list, text, page }) => {

    const navigate = useNavigate();

    const [value, setValue] = useState('')

    const [val, setVal] = useState('')

    const [options, setOptions] = useState([
        { label: text.question_quatre_options[0], value: '' },
        { label: text.question_quatre_options[1], value: '' },
        { label: text.question_quatre_options[2], value: '' },
        { label: text.question_quatre_options[3], value: '' },
    ]);

    const [completed, setCompleted] = useState(false)

    const [next, setNext] = useState(false)

    const isCompleted = (currentValue) => currentValue.value.trim().length

    const handleChange = index => e => {
        let newArr = [...options];
        newArr[index] = { ...newArr[index], value: e.target.value }
        setOptions(newArr)

        setCompleted(newArr.every(isCompleted))
    }

    const handleRedirect = () => {
        update_form_trial(value)
        page();
        navigate('/stimuli')
    }

    // ici a store autre part et renvoyer dans handleEnd (ajouter la valeur a .map)
    const handleNext = () => {
        page();
        setNext(true)
    }

    const handleEnd = () => {
        // update_form_trial(value)
        page();
        // update_form_trial_list(options.map((option) => option.value))
        update_form_trial_list([val].concat(options.map((option) => option.value)))
        navigate('/scale')
    }

    return (
        <div className={style.root}>
            {nb_trial === 1 ? (
                <Un onClick={handleRedirect} onChange={(e) => setValue(e.target.value)} value={value} text={text} />
            ) : (
                <>
                    {nb_trial === 6 ? (
                        <Trois onClick={handleRedirect} onChange={(e) => setValue(e.target.value)} value={value} text={text} />
                    ) : (
                        <>
                            {nb_trial === 24 ? (
                                <>
                                    {!next ? (
                                        <Deux onClick={handleNext} onChange={(e) => setVal(e.target.value)} value={val} text={text} />
                                    ) : (
                                        <div className={style.container}>
                                            <div className={style.header}>
                                                <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.question_quatre_q }} />
                                            </div>
                                            {options.map((option, index) =>
                                                <div className={style.wrapper} key={index}>
                                                    <Typography variant={'h4'}>{option.label} :</Typography>
                                                    <RangeSlider label={option.label} value={option.value} onChange={handleChange(index)} />
                                                    <div className={style.label}>
                                                        <p>{text.question_quatre_lab[0]}</p>
                                                        <p>{text.question_quatre_lab[1]}</p>
                                                    </div>
                                                    <Divider />
                                                </div>
                                            )}
                                            <div className={style.button}>
                                                <Button disabled={!completed} onClick={handleEnd}>{text.button}</Button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div>Erreur</div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>


        //     {nb_trial === 1 ? (
        //         <Un onClick={handleRedirect} onChange={(e) => setValue(e.target.value)} value={value} text={text}/>
        //     ) : (
        //         <div className={style.root}>
        //             {nb_trial === 6 ? (
        //                 <Deux onClick={handleRedirect} onChange={(e) => setValue(e.target.value)} value={value} text={text}/>
        //             ) : (
        //                 <div className={style.root}>
        //                     {nb_trial === 24 ? (
        //                         <Trois onClick={handleRedirect} onChange={(e) => setValue(e.target.value)} value={value} text={text}/>
        //                     ) : (
        //                         <div className={style.root}>
        //                             {nb_trial === 24 ? (
        //                                 // <Quatre onClick={handleEnd} onChange={handleChange} value={value} />
        //                                 <div className={style.container}>
        //                                     <div className={style.header}>
        //                                         <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.question_quatre_q }}/>
        //                                     </div>
        //                                     {options.map((option, index) =>
        //                                         <div className={style.wrapper} key={index}>
        //                                             <Typography variant={'h4'}>{option.label} :</Typography>
        //                                             <RangeSlider label={option.label} value={option.value} onChange={handleChange(index)} />
        //                                             <div className={style.label}>
        //                                                 <p>{text.question_quatre_lab[0]}</p>
        //                                                 <p>{text.question_quatre_lab[1]}</p>
        //                                             </div>
        //                                             <Divider />
        //                                         </div>
        //                                     )}
        //                                     <div className={style.button}>
        //                                         <Button disabled={!completed} onClick={handleEnd}>{text.button}</Button>
        //                                     </div>
        //                                 </div>
        //                             ) : (
        //                                 
        //                             )}
        //                         </div>
        //                     )}
        //                 </div>
        //             )}
        //         </div>
        //     )}
        // </div>
    )
}

const mapStateToProps = state => ({
    nb_trial: state.exportReducer.nb_trial,
    text: state.textReducer.text,
})


export default connect(mapStateToProps, { update_form_trial, update_form_trial_list, page })(Question)