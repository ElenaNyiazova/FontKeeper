import React, {useState} from 'react';
import ContentView  from '../content-view/content-view';
import FontSelector from '../font-selector/font-selector';
import Rules from '../rules/rules';

const MainScreen = () => {
    const [letter, setLetter] = useState('A');

    return (
        <main className='main-content'>
            <div className='main-content-top'>
                <div className="container">
                    <ContentView letter={letter} setLetter={setLetter} fontName="Roboto" />
                </div>
            </div>

            <div className="sidebar">
                <FontSelector />
            </div>
            
            <div className='main-content-bottom'>
                <div className="container">
                    <Rules />
                </div>
            </div>
        </main>
    );
};

export default MainScreen;