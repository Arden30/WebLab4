import React from 'react';
import CSSModules from 'react-css-modules';
import style from './header.module.css';

const Header = () => {
    return (
        <header>
            <h1>Arsenev Denis, P3214</h1>
            <h2>Variant: 2450</h2>
        </header>
    );
}

export default CSSModules(Header, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });