import React from 'react';
import CSSModules from 'react-css-modules';
import style from './exitButton.module.css';
import {clearHits, logOut} from "../../../store/tokenSlice";
import {useDispatch} from "react-redux";

const ExitButton = () => {
    const dispatch = useDispatch()
    const exit = () => {
        dispatch(clearHits())
        dispatch(logOut())
    }
    return (
        <button styleName="exit-button" type="submit" onClick={exit}>Exit</button>
    );
}
export default CSSModules(ExitButton, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });