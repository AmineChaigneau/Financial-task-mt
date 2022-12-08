import { RangeSlider } from "../Component/slider.styled";
import { useState } from "react";
import style from './index.module.css'
import { Typography } from "../Component/styles/typography.styled";
import { Button } from "../Component/button.styled";
import { useNavigate } from 'react-router-dom';
import { update_risk_scale } from '../Redux/Actions/form'
import { connect } from "react-redux";
import { page } from '../Redux/Actions/export'
import img from './Bomb_rules.png'

const Risk = ({ subject_id, update_risk_scale, text, page }) => {

    const navigate = useNavigate()

    const [slider, setSlider] = useState(0);

    const [game, setGame] = useState(0)

    const handleChangeSlide = e => {
        setSlider(e.target.value)
    }

    const handleClick = () => {
        setGame(game + 1)
        page();
    }

    const handleRedirect = () => {
        update_risk_scale({ subject_id: subject_id, slider: slider})
        page();
        navigate('/test')
    }

    return (
        <div className={style.root}>
            {game === 0 ? (
                <>
                    <div className={style.container}>
                        <div className={style.header}>
                            <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.risk_question }} />
                        </div>
                        <RangeSlider name={'risk'} max={10} value={slider} onChange={(e) => handleChangeSlide(e)} />
                        <div className={style.label}>
                            <p>{text.risk_lab[0]}</p>
                            <p>{text.risk_lab[1]}</p>
                        </div>
                    </div>
                    <div>
                        <Button disabled={slider <= 0} onClick={handleClick}>{text.button}</Button>
                    </div>
                </>
            ) : (
                <div className={style.containerRules}>
                    <div className={style.containerEssai}>
                        {game === 1 ? (
                            <div className={style.content}>
                                <div className={style.text}>
                                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.bomb_task1 }} />
                                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.bomb_task2 }} />
                                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.bomb_task3 }} />
                                </div>
                                <Button onClick={handleClick}>
                                    {text.button}
                                </Button>
                            </div>
                        ) : (
                            <div className={style.content}>
                                <div className={style.text}>
                                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.bomb_task4 }} />
                                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.bomb_task5 }} />
                                    <Typography variant={'h4'} dangerouslySetInnerHTML={{ __html: text.bomb_task6 }} />
                                </div>
                                <Button onClick={handleRedirect}>
                                    {text.button1}
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className={style.imgContainer}>
                        <img alt='bomb' src={img} />
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id,
    text: state.textReducer.text,
})

export default connect(mapStateToProps, { update_risk_scale, page })(Risk);