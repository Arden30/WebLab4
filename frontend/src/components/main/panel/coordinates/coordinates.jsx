import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CSSModules from 'react-css-modules';
import style from './coordinates.module.css';
import FormButtons from "./formButtons/formButtons";
import {addHit, changeR} from "../../../../store/tokenSlice";
import Validator from "../../../../validation/validator";
import Service from "../../../../api/service";

const Coordinates = () => {
    const [hit, setHit] = useState({x: '', y: '', r: '1'})
    const token = useSelector(state => state.token.token)
    const dispatch = useDispatch()
    const [validInfo, setValidInfo] = useState({error: '', success: false})
    const [xValidInfo, setXValidInfo] = useState({error: '', success: false})
    const [yValidInfo, setYValidInfo] = useState({error: '', success: false})
    const [rValidInfo, setRValidInfo] = useState({error: '', success: false})
    const sendHit = (e) => {
        e.preventDefault();
        setXValidInfo(Validator.xIsValid(hit.x))
        setYValidInfo(Validator.yIsValid(hit.y))
        setRValidInfo(Validator.rIsValid(hit.r))
        setValidInfo(Validator.variablesIsValid(hit.x, hit.y, hit.r))
        if (validInfo.success) {
            Service.sendHit(hit, token)
                .then(res => dispatch(addHit(res)))
        }
    }
    return (
        <form styleName="coordinates">
            <div styleName="x-val">
                <label> Enter X: </label>
                <input type="text" id="x" placeholder="[-5;5]" value={hit.x} maxLength={13}
                       onChange={e => {
                           setHit({...hit, x: e.target.value.replace(",", ".")})
                           setValidInfo(Validator.variablesIsValid(e.target.value, hit.y, hit.r))
                           setXValidInfo(Validator.xIsValid(e.target.value))
                       }}/>
            </div>
            <p styleName="validationStyle">{xValidInfo.error}</p>
            <div styleName="y-val">
                <label> Enter Y: </label>
                <FormButtons groupValues={[-3,-2,-1,0,1,2,3,4,5]} selectedValue={hit.y}
                             onClick={selectedY => {
                                 setHit({...hit, y: selectedY})
                                 setValidInfo(Validator.variablesIsValid(hit.x, selectedY, hit.r))
                                 setYValidInfo(Validator.yIsValid(selectedY))
                             }}/>
            </div>
            <p styleName="validationStyle">{yValidInfo.error}</p>
            <div styleName="r-val">
                <label> Enter R: </label>
                <input type="text" id="r" placeholder="[-5;5]" value={hit.r} maxLength={6}
                       onChange={e => {
                           const rv = e.target.value.replace(",", ".")
                           setHit({...hit, r: rv})
                           setValidInfo(Validator.variablesIsValid(hit.x, hit.y, rv))
                           setRValidInfo(Validator.rIsValid(rv))
                           if (Validator.rIsValid(rv).success) {
                               dispatch(changeR(rv))
                           } else {
                               dispatch(changeR(0))
                           }
                       }}/>
            </div>
            <p styleName="validationStyle">{rValidInfo.error}</p>
            <button styleName="submit-button" type="submit" onClick={sendHit}>Send</button>
        </form>
    );
}
export default CSSModules(Coordinates, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });