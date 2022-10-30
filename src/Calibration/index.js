import { useState, useEffect, useRef } from 'react'
import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import style from './index.module.css'
import { ReactComponent as Fixed } from '../Component/ressources/fixed.svg'
import image from '../Component/ressources/charlie.png'

const Calibration = () => {

    const navigate = useNavigate()

    const [start, setStart] = useState(false)

    const [end, setEnd] = useState(false)

    const [position, setPosition] = useState({ top: '50%', left: '50%' })

    const timer = useRef();

    const handleRedirect = () => {
        navigate('/calibrationmt')
    }

    const t = 10000;

    const handleClick = () => {
        setStart(true)

        timer.current = setTimeout(() => {
            setPosition({ top: '10%', left: '10%' })
            timer.current = setTimeout(() => {
                setPosition({ top: '10%', left: '90%' })
                timer.current = setTimeout(() => {
                    setPosition({ top: '90%', left: '90%' })
                    timer.current = setTimeout(() => {
                        setPosition({ top: '90%', left: '10%' })
                        timer.current = setTimeout(() => {
                            setEnd(true)
                        }, t)
                    }, t)
                }, t)
            }, t)
        }, t)
    }

    return (
        <div className={style.root}>
            {!start ? (
                <div className={style.button}>
                    <Typography variant={'h4'}>Phase d'étalonnage</Typography>
                    <Button onClick={handleClick}>
                        Commencer
                    </Button>
                </div>
            ) : (
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
                                <img alt='' src={image}/>
                            </div>
                            <Button onClick={handleRedirect}>
                                Continuer
                            </Button>
                        </div>
                    )}
                </>
            )}


            {/* <div className={style.button}>
                <Button onClick={() => navigate('/stimuli')} disabled={false}>
                    Continuer
                </Button>
            </div> */}
        </div>
    )
}

export default Calibration