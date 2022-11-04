import style from './index.module.css'
import { Typography } from '../Component/styles/typography.styled'
import { RangeSlider } from '../Component/slider.styled'
import { useState } from 'react'
import { Button } from '../Component/button.styled'
import { RadioButton } from '../Component/radio.styled'
import { useNavigate } from 'react-router-dom';

const Un = ({ value, onChange }) => {

    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Dans quelle mesure vous êtes-vous fié à votre expérience personnelle pour prendre cette décision ?</Typography>
            </div>
            <RangeSlider name={'r1'} max={10} value={value} onChange={onChange} />
            <div className={style.label}>
                <p>Pas du tout</p>
                <p>Complément</p>
            </div>
        </>
    )
}

const Deux = ({ value, onChange }) => {

    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Veuillez indiquer dans quelle mesure cette décision était pertinente pour vous sur l'échelle ci-dessous.</Typography>
            </div>
            <RangeSlider name={''} max={10} value={value} onChange={onChange} />
            <div className={style.label}>
                <p>Pas du tout</p>
                <p>Complément</p>
            </div>
        </>
    )
}

const Trois = ({ value, onChange }) => {

    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Veuillez indiquer le niveau d'effort que la prise de cette décision vous a demandé sur l'échelle ci-dessous.</Typography>
            </div>
            <RangeSlider name={''} max={10} value={value} onChange={onChange} />
            <div className={style.label}>
                <p>Pas du tout</p>
                <p>Complément</p>
            </div>
        </>
    )
}

const Quatre = ({ value, onChange }) => {

    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Quelle est votre expérience avec ce type de décisions ?</Typography>
            </div>
            <RangeSlider name={''} max={10} value={value} onChange={onChange} />
            <div className={style.label}>
                <p>Pas du tout</p>
                <p>Complément</p>
            </div>
        </>
    )
}

const Cinq = ({ value, onChange }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Supposons que vous disposiez de 100 € sur un compte d'épargne et que le taux d'intérêt était de 2 % par an. Après 5 ans, combien pensez-vous que vous auriez sur le compte si vous laissiez l'argent fructifier ?</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={"Plus de 102 €"} />
                <RadioButton value={'2'} label={"Exactement 102 €"} />
                <RadioButton value={'3'} label={"Moins de 102 €"} />
                <RadioButton value={'4'} label={"Je ne sais pas"} />
                <RadioButton value={'5'} label={"Je préfère ne rien dire"} />
            </form>
        </>
    )
}

const Six = ({ value, onChange }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Imaginez que le taux d'intérêt sur votre compte d'épargne était de 1 % par an et que l'inflation était de 2 % par an. Après 1 an, combien seriez-vous en mesure d'acheter avec l'argent de ce compte ?</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={"Plus qu'aujourd'hui"} />
                <RadioButton value={'2'} label={"Exactement le même"} />
                <RadioButton value={'3'} label={"Moins qu'aujourd'hui"} />
                <RadioButton value={'4'} label={"Je ne sais pas"} />
                <RadioButton value={'5'} label={"Je préfère ne rien dire"} />
            </form>
        </>
    )
}

const Sept = ({ value, onChange }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Si les taux d'intérêt augmentent, qu'arrivera-t-il généralement aux prix des obligations ?</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={"Ils se lèveront"} />
                <RadioButton value={'2'} label={"Ils tomberont"} />
                <RadioButton value={'3'} label={"Ils resteront les mêmes"} />
                <RadioButton value={'4'} label={"Il n'y a pas de relation entre le prix des obligations et le taux d'intérêt"} />
                <RadioButton value={'5'} label={"Je ne sais pas"} />
                <RadioButton value={'6'} label={"Je préfère ne rien dire"} />
            </form>
        </>
    )
}

const Huit = ({ value, onChange }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Un prêt hypothécaire de 15 ans nécessite généralement des versements mensuels plus élevés qu'un prêt hypothécaire de 30 ans, mais le total des intérêts payés sur la durée du prêt sera inférieur.</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={"Vraie"} />
                <RadioButton value={'2'} label={"Faux"} />
                <RadioButton value={'3'} label={"Je ne sais pas"} />
                <RadioButton value={'4'} label={"Je préfère ne rien dire"} />
            </form>
        </>
    )
}

const Neuf = ({ value, onChange }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>L'achat d'actions d'une seule entreprise offre généralement un rendement plus sûr qu'un fonds commun de placement.</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={"Vraie"} />
                <RadioButton value={'2'} label={"Faux"} />
                <RadioButton value={'3'} label={"Je ne sais pas"} />
                <RadioButton value={'4'} label={"Je préfère ne rien dire"} />
            </form>
        </>
    )
}

const Dix = ({ value, onChange }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Une batte et une balle coûtent 1,10 $ au total. La batte coûte 1,00 $ de plus que la balle. Combien coûte la balle ?</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={"1 cent"} />
                <RadioButton value={'2'} label={"5 cent"} />
                <RadioButton value={'3'} label={"10 cent"} />
            </form>
        </>
    )
}

const Onze = ({ value, onChange }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>S'il faut 5 minutes à 5 machines pour fabriquer 5 articles, combien de temps faudrait-il à 100 machines pour fabriquer 100 articles ?</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={"1 minute"} />
                <RadioButton value={'2'} label={"5 minutes"} />
                <RadioButton value={'3'} label={"10 minutes"} />
            </form>
        </>
    )
}

const Douze = ({ value, onChange }) => {
    return (
        <>
            <div className={style.header}>
                <Typography variant={'h4'}>Dans un lac, il y a une parcelle de nénuphars. Chaque jour, la taille de la parcelle double. S'il faut 48 jours pour que la parcelle couvre tout le lac, combien de temps faudrait-il pour que la parcelle couvre la moitié du lac ?</Typography>
            </div>
            <form className={style.form} value={value} onChange={onChange}>
                <RadioButton value={'1'} label={"12 jours"} />
                <RadioButton value={'2'} label={"24 jours"} />
                <RadioButton value={'3'} label={"47 jours"} />
            </form>
        </>
    )
}

const Scale = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        r1: '',
        r2: '',
        r3: '',
        r4: '',
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        l1: '',
        l2: '',
        l3: ''
    })

    const [page, setPage] = useState(1);

    const display = () => {
        switch (page) {
            case 1:
                return <Un value={data.r1} onChange={(e) => setData({ ...data, r1: e.target.value })} />
            case 2:
                return <Deux value={data.r2} onChange={(e) => setData({ ...data, r2: e.target.value })} />
            case 3:
                return <Trois value={data.r3} onChange={(e) => setData({ ...data, r3: e.target.value })} />
            case 4:
                return <Quatre value={data.r4} onChange={(e) => setData({ ...data, r4: e.target.value })} />
            case 5:
                return <Cinq value={data.q1} onChange={(e) => setData({ ...data, q1: e.target.value })} />
            case 6:
                return <Six value={data.q2} onChange={(e) => setData({ ...data, q2: e.target.value })} />
            case 7:
                return <Sept value={data.q3} onChange={(e) => setData({ ...data, q3: e.target.value })} />
            case 8:
                return <Huit value={data.q4} onChange={(e) => setData({ ...data, q4: e.target.value })} />
            case 9:
                return <Neuf value={data.q5} onChange={(e) => setData({ ...data, q5: e.target.value })} />
            case 10:
                return <Dix value={data.l1} onChange={(e) => setData({ ...data, l1: e.target.value })} />
            case 11:
                return <Onze value={data.l2} onChange={(e) => setData({ ...data, l2: e.target.value })} />
            case 12:
                return <Douze value={data.l3} onChange={(e) => setData({ ...data, l3: e.target.value })} />
            default:
                return <Typography variant={'h4'}>Encore une dernière étape..</Typography>
        }
    }

    const handleNext = () => {
        setPage(page + 1)
        handleChange();
    }

    const handleChange = () => {
        console.log(data)
        console.log(page)
    }

    const handleRedirect = () => {
        navigate('/form')
        // push state
    }

    return (
        <div className={style.root}>
            <div className={style.header}>
                <Typography variant={'h4'}><i>C'est presque terminé ! Vous devez répondre à quelques questions.</i></Typography>
            </div>
            <div className={style.container}>
                {display()}
            </div>
            <div className={style.button}>
                {page <= 12 ? (
                    <Button onClick={handleNext}>Continuer</Button>
                ) : (
                    <div>     
                        <Button onClick={handleRedirect}>Continuer</Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Scale