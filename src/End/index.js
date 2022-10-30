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

const exportToCsv = (data, name) => {

    console.log(data)
    // Headers for each column
    let headers = ['id_trial, stimuli, time, choice, output, invert, height, width']

    // Convert users data to a csv
    let resCsv = data.reduce((acc, df) => {
        acc.push([df.id_trial, df.stimuli, df.time, df.choice, df.output, df.invert, df.height_device, df.width_device].join(','))
        return acc
    }, [])

    downloadFile({
        data: [...headers, ...resCsv].join('\n'),
        fileName: [name, 'results.csv'].join('_'),
        fileType: 'text/csv',
    })
}

const exportToJson = (e, name) => {
    downloadFile({
        data: JSON.stringify(e),
        fileName: [name, 'results.json'].join('_'),
        fileType: 'text/json',
    })
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

const End = ({ export_trial }) => {

    const handleClick = () => {
        exportToCsv(export_trial.trials, export_trial.subject_id)
        exportToJson(export_trial, export_trial.subject_id)
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
    export_trial: state.exportReducer
})

export default connect(mapStateToProps)(End)