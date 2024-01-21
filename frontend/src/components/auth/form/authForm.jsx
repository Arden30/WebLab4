import React, {useState} from 'react';
import CSSModules from 'react-css-modules';
import style from './authForm.module.css';
import {useDispatch} from "react-redux";
import Service from "../../../api/service";
import {authorize, setToken} from "../../../store/tokenSlice";

const AuthForm = () => {
    const [user, setUser] = useState({login: '', password: ''})
    const [info, setInfo] = useState("")
    const dispatch = useDispatch()

    const signUp = (e) => {
        e.preventDefault()
        setInfo("")
        Service.signUpReq(user.login, user.password)
            .then(() => {
                setInfo("User was successfully created!")
            }).catch(function (error) {
                if (error.response.status === 403) {
                    setInfo("Username and Password must have from 4 to 50 chars")
                } else {
                    setInfo(error.response.data)
                }
        });
    }

    const signIn = (e) => {
        e.preventDefault()
        setInfo("")
        Service.signInReq(user.login, user.password)
            .then(token => {
                dispatch(setToken(token))
                dispatch(authorize())
            }).catch(function (error) {
                if (error.response.status === 403) {
                    setInfo("Username and Password must have from 4 to 50 chars")
                } else {
                    setInfo(error.response.data)
                }
        });
    }

    return (
        <form styleName="auth-form">
            <input styleName={"login"}
                   value={user.login}
                   type={"text"}
                   onChange={e => setUser({...user, login: e.target.value})}
                   placeholder={"Enter Login"}/>
            <input styleName={"password"}
                   value={user.password}
                   type={"password"}
                   onChange={e => setUser({...user, password: e.target.value})}
                   placeholder={"Enter Password"}/>
            <div styleName={"MyButtons"}>
                <button styleName="authorize-button" type="submit" onClick={signIn}>Sign In</button>
                <button styleName="register-button" type="submit" onClick={signUp}>Sign Up</button>
            </div>
            <h3 styleName={"info"}>{info}</h3>
        </form>
    );
}

export default CSSModules(AuthForm, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });