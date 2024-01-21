import React from 'react';
import CSSModules from 'react-css-modules';
import style from './main.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import Panel from "./panel/panel";
import Table from "./tabel/table";
import Button from "./exitButton/exitButton";

const MainPage = () => {
    return (
        <main>
            <Header />
            <Button />
            <Panel />
            <Table />
            <Footer />
        </main>
    );
}

export default CSSModules(MainPage, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });