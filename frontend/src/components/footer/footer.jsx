import React from 'react';
import CSSModules from 'react-css-modules';
import style from './footer.module.css';

const Footer = () => {
    return (
        <footer>
            <h2>Web-programming. Laboratory work #4. 2024</h2>
        </footer>
    );
}

export default CSSModules(Footer, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });