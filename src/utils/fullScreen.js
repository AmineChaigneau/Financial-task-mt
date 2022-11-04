import { useRef, useEffect, useCallback } from "react";
import useFullscreenStatus from "./useFullScreenStatus";
import { Button } from '../Component/button.styled'
import Dialog from "../Component/dialog.styled";
import style from "./fullScreen.module.css"
import { Typography } from "../Component/styles/typography.styled";
import { useWindowDimensions } from '../hook'
import { update_screen } from '../Redux/Actions/current'
import { connect } from "react-redux";

const FullScreen = ({ children, update_screen }) => {

    const { height, width } = useWindowDimensions();

    const screenUpdate = useCallback(() => {
        update_screen({ height: height, width: width })
    }, [update_screen, height, width])

    useEffect(() => {
        screenUpdate();
    }, [screenUpdate])

    const maximizeElement = useRef(null);
    let isFullscreen, setIsFullscreen;
    let errorMessage;

    try {
        [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizeElement);
    } catch (e) {
        errorMessage = "Fullscreen not supported";
        isFullscreen = false;
        setIsFullscreen = undefined;
    }

    const handleClick = () => {
        setIsFullscreen();
        console.log(isFullscreen)
    }

    const fullScreenMode = useCallback(() => {
        console.log(`browser dectect fullSreenMode: ${isFullscreen}`)
    }, [isFullscreen])

    useEffect(() => {
        !isFullscreen && fullScreenMode();
    }, [isFullscreen, fullScreenMode])

    return (
        <div ref={maximizeElement}
           style={{ background: '#fff' }}
        >
            {errorMessage ? (
                <div>
                    Le mode plein écran (fullscreen mode) n'est pas supporté par votre navigateur.
                </div>
            ) : (
                <>
                    <Dialog open={!isFullscreen}>
                        <div className={style.container}>
                            <Typography variant={'h4'}>PLEIN ECRAN REQUIS (FULLSCREEN)</Typography>
                            <div className={style.content}>
                                <Typography>
                                    En poursuivant votre navigateur exploitera <strong style={{ color: 'red' }}>la totalité de la surface d'affichage de votre écran</strong> (i.e fullscreen mode). Vous ne pourrez pas intéragir avec l'experimentation si le mode "fullscreen" n'est pas activé.
                                </Typography>
                                <Button onClick={handleClick}>Passer en mode plein ecran</Button>
                            </div>
                        </div>
                    </Dialog>
                    <div style={{ overflow: 'auto' }}>
                        {children}
                    </div>
                </>
            )}
        </div >
    )
}

const mapStateToProps = state => ({
    subject_id: state.exportReducer.subject_id
})

export default connect(mapStateToProps, { update_screen })(FullScreen)