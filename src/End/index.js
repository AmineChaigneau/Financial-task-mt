import { connect } from 'react-redux'
import { Button } from '../Component/button.styled'
import style from './index.module.css'
import { Typography } from '../Component/styles/typography.styled.js'

const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType })

    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
}

const Confeti = ({ children }) => {
    return (
        <div className={style.hoverme}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            {children}
        </div>
    )
}

const End = ({ export_trial, bulshit_data, export_calibration, trial_scale_data, risk_game_data, risk_value, formulaire_data, questionnaire_data }) => {

    const subject_id = String(export_trial.subject_id);

    const form = formulaire_data;

    const ques = questionnaire_data

    const ques_data = [].concat(ques.l1, ques.l2, ques.l3, ques.q1, ques.q2, ques.q3, ques.q4, ques.q5, ques.r1, ques.r2, ques.r3, ques.r4)

    const bulshit = bulshit_data.map(function (id) { return id.value }).concat(subject_id, trial_scale_data, ques_data, risk_game_data, risk_value, form.age, form.genre, form.profession, form.main, form.souris)

    const replacer = function (key, value) { return value === null ? '' : value }

    const handleClick = () => {

        const json = export_trial.trials

        const fields = Object.keys(json[0])

        const tracking = json.map(function (row) {
            return fields.map(function (fieldName) {
                return JSON.stringify(row[fieldName], replacer)
            })
        })

        const csvExport = tracking.map(function (id) {
            const newArr = [].concat(id, bulshit)

            return newArr
        })

        const headers = ['id_trial; stimuli; time; tracking; choice; output; invert; height; width; bulshit_q1; bulshit_q2; bulshit_q3; bulshit_q4; bulshit_q5; bulshit_q6; bulshit_q7; bulshit_q8; bulshit_q9; bulshit_q10; bulshit_q11; bulshit_q12; subject_id; trial_q1; trial_q2; trial_q3; trial_q4; ques_l1; ques_l2; ques_l3; ques_q1; ques_q2; ques_q3; ques_q4; ques_q5; ques_r1; ques_r2; ques_r3; ques_r4; perf1; perf2; risk_q; age; genre; profession; main; souris']

        const Export = csvExport.map(function(row) {
            return row.join(';')
        })

        // console.log(csvExport)
        downloadFile({
            data: [...headers, ...Export].join('\n'),
            fileName: [subject_id, 'results.csv'].join('_'),
            fileType: 'text/csv',
        })
    }

    const handleClickCalibration = () => {

        const json = export_calibration.calibration

        const headers = ['time, x, y, id, subject_id']

        const tracking = json.map((id, key) => {
            return id.map(item => {
                const arr = Object.values(item)
                const newArr = [].concat(arr, key, subject_id)
                return newArr.toString()
            }).join('\n');
        });

        // console.log(tracking)

        downloadFile({
            data: [...headers, ...tracking].join('\n'),
            fileName: [subject_id, 'calibration.csv'].join('_'),
            fileType: 'text/csv',
        })
    }

    return (
        <div className={style.root}>
            <div className={style.container}>
                <Confeti>
                    <Typography variant='h1'>
                        Merci de votre participation.
                    </Typography>
                </Confeti>
            </div>
            <div className={style.download}>
                <Button onClick={handleClick}>
                    Telecharger les résultats
                </Button>
                <Button onClick={handleClickCalibration}>
                    Telecharger calibration
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    export_trial: state.exportReducer,
    export_calibration: state.calibrationReducer,
    bulshit_data: state.formReducer.bulshit_scale,
    trial_scale_data: state.formReducer.trial_scale,
    risk_game_data: state.formReducer.risk_game,
    risk_value: state.formReducer.risk_scale,
    formulaire_data: state.formReducer.formulaire,
    questionnaire_data: state.formReducer.question_scale,
})

export default connect(mapStateToProps)(End)