import React, {useEffect} from 'react';
import AuthPage from './components/auth/authPage';
import MainPage from './components/main/main';
import {useDispatch, useSelector} from "react-redux";
import {authorize, logOut, setToken} from "./store/tokenSlice";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const savedToken = sessionStorage.getItem('authToken');
        if (savedToken) {
            dispatch(setToken(savedToken))
            dispatch(authorize());
        } else {
            dispatch(logOut());
        }
    }, [dispatch]);

    const isAuth = useSelector(state => state.token.auth)
    if (isAuth) {
        return <MainPage />
    } else {
        return <AuthPage />
    }
}

export default App;
