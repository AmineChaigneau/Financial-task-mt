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

const End = ({ export_trial, form_data }) => {

    const subject_id = String(export_trial.subject_id);

    const form = form_data.map(function (id) { return id.value }).concat(subject_id)

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
            const newArr = [].concat(id, form)

            return newArr
        })

        const headers = ['id_trial; stimuli; time; tracking; choice; output; invert; height; width; q1; q2; q3; q4; q5; q6; q7; q8; q9; q10; q11; subject_id']

        const Export = csvExport.map(function(row) {
            return row.join(';')
        })

        downloadFile({
            data: [...headers, ...Export].join('\n'),
            fileName: [subject_id, 'results.csv'].join('_'),
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
                    Telecharger résultats
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    export_trial: state.exportReducer,
    form_data: state.formReducer.form
})

export default connect(mapStateToProps)(End)