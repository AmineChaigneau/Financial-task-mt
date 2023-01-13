import { useState, useEffect, useRef } from 'react'
import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import style from './index.module.css'
import { ReactComponent as Fixed } from '../Component/ressources/fixed.svg'
import rules from '../Component/ressources/Training_rules.png'
import { connect } from 'react-redux'
import { page } from '../Redux/Actions/export'

const Calibration = ({ text, page }) => {

    const navigate = useNavigate()

    // const [start, setStart] = useState(false)

    // const [end, setEnd] = useState(false)

    // const [position, setPosition] = useState({ top: '50%', left: '50%' })

    // const timer = useRef();

    const handleRedirect = () => {
        navigate('/calibrationmt')
        page()
    }

    // const t = 5000;

    // const handleClick = () => {
    //     setStart(true)

    //     timer.current = setTimeout(() => {
    //         setPosition({ top: '10%', left: '10%' })
    //         timer.current = setTimeout(() => {
    //             setPosition({ top: '10%', left: '90%' })
    //             timer.current = setTimeout(() => {
    //                 setPosition({ top: '90%', left: '90%' })
    //                 timer.current = setTimeout(() => {
    //                     setPosition({ top: '90%', left: '10%' })
    //                     timer.current = setTimeout(() => {
    //                         setEnd(true)
    //                         page()
    //                     }, t)
    //                 }, t)
    //             }, t)
    //         }, t)
    //     }, t)
    // }

    return (
        <div className={style.root}>
            {/* {!start ? ( */}
                <div className={style.container}>
                    <div className={style.image}>
                        <img alt='' src={rules} />
                    </div>
                    <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.calib_corps1 }} />
                    {/* <Typography variant={'h4'} dangerouslySetInnerHTML={{__html: text.calib_corps2 }} /> */}
                    <div className={style.button}>
                        <Button onClick={handleRedirect}>
                            {text.button}
                        </Button>
                    </div>
                </div>
            {/* ) : (
                <>
                    {!end ? (
                        <div className={style.stimuli} style={{ top: position.top, left: position.left }}>
                            <div>
                                <Fixed />
                            </div>
                        </div>
                    ) : (
                        <div className={style.content}>
                            <div className={style.img}>
                                
                            </div>
                            <Button onClick={handleRedirect}>
                                {text.button}
                            </Button>
                        </div>
                    )}
                </>
            )}
 */}

            {/* <div className={style.button}>
                <Button onClick={() => navigate('/stimuli')} disabled={false}>
                    Continuer
                </Button>
            </div> */}
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.textReducer.text,
})


export default connect(mapStateToProps, { page })(Calibration)