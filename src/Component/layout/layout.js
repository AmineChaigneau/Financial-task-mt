import { connect } from "react-redux"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import style from './layout.module.css'

const ProgressBackground = styled.div` 
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 6px;
    background: ${({theme}) => theme.colors.primary.light};
`
const ProgressBar = styled.div` 
    position: fixed;
    bottom: 0px;
    width: ${(props) => props.length}%;
    height: 6px;
    background: ${({theme}) => theme.colors.primary.main};
    transition: 0.5s ease-in-out;
`

const Layout = ({ len }) => {

    return (
        <div className={style.root}>
            <Outlet />
            <ProgressBackground/>
            <ProgressBar length={(len * 1.6129)}></ProgressBar>
        </div>
    )
}

const mapStateToProps = state => ({
    len: state.exportReducer.nb_page,
})

export default connect(mapStateToProps)(Layout)