import React from 'react';
import ContentView  from '../content-view/content-view';
import FontSelector from '../font-selector/font-selector';
import Rules from '../rules/rules';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainScreen = () => {
    return (
        <div className='container'>
        <Header />
        <main className='main-content'>
            <div className='main-content-top'>
                <ContentView fontName="Roboto" />
            </div>
            <div className="sidebar">
                <FontSelector />
            </div>
            <div className='main-content-bottom'>
                <Rules />
            </div>
        </main>
        <Footer />
        </div>
    );
};

export default MainScreen;