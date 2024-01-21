import React from 'react';
import CSSModules from 'react-css-modules';
import AuthForm from "./form/authForm";
import style from "./authPage.module.css"
import Header from "../header/header";
import Footer from "../footer/footer";

const AuthPage = () => {
    return (
        <div styleName={"auth-page"}>
            <Header />
            <h2 styleName={"header"}>Please, authorize or register</h2>
            <AuthForm />
            <Footer />
        </div>
    );
}

export default CSSModules(AuthPage, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });