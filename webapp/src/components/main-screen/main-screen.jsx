import React, {useState} from "react";
import {Link} from "react-router-dom";
import ContentView  from "../content-view/content-view";
import Cards from "../cards/cards";
import FontSelector from "../font-selector/font-selector";


const MainScreen = () => {
    const [font, setFont] = useState('');
    const [source, setSource] = useState('');

    return (
        <div className="container">
        <header className="main-header">
            <h1 className="main-title"><span>Б</span>уква к <span>б</span>укве</h1>
            <p className="user-nav">
                <Link className="main-link" to="/">
                  Вход на сайт
                </Link>
            </p>
        </header>
        <main className="main-content">
            <div className="main-content-top">
                <ContentView fontName="Roboto" />
            </div>
            <div className="sidebar">
                <FontSelector setFont={setFont} setSource={setSource} />
            </div>
            <div className="main-content-bottom">
                <Cards fontName="Roboto" />
            </div>
        </main>
        <footer className="main-footer">
            <h2 className="main-title"><span>Б</span>уква к <span>б</span>укве</h2>
            <Link className="main-link" to="/">
                Написать разработчикам
            </Link>
        </footer>
        </div>
    );
};

export default MainScreen;