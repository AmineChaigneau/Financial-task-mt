import { useState, useEffect, useRef } from 'react'
import { Button } from '../Component/button.styled'
import { Typography } from '../Component/styles/typography.styled'
import { useNavigate } from 'react-router-dom'
import style from './index.module.css'
import { ReactComponent as Fixed } from '../Component/ressources/fixed.svg'
import image from '../Component/ressources/charlie.png'
import rules from '../Component/ressources/Training_rules.png'

const Calibration = () => {

    const navigate = useNavigate()

    const [start, setStart] = useState(false)

    const [end, setEnd] = useState(false)

    const [position, setPosition] = useState({ top: '50%', left: '50%' })

    const timer = useRef();

    const handleRedirect = () => {
        navigate('/calibrationmt')
    }

    const t = 5000;

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
                <div className={style.container}>
                    <div className={style.image}>
                        <img alt='' src={rules} />
                    </div>
                    <Typography variant={'h4'}>
                        Au cours de cette expérience, nous utiliserons les technologies de suivi oculaire et de suivi de la souris.
                        Avant de commencer, pour vous familiariser avec la manière dont l'étude est menée, nous ferons <b>quelques tentatives de test</b>.
                        Cette phase permettera également l'étalonnage des instruments.
                    </Typography>
                    <div className={style.button}>
                        <Button onClick={handleClick}>
                            Commencer
                        </Button>
                    </div>
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
                                <img alt='' src={image} />
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