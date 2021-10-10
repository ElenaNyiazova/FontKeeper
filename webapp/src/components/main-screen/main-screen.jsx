import React, {useState} from 'react';
import ContentView  from '../content-view/content-view';
import FontSelector from '../font-selector/font-selector';
import Rules from '../rules/rules';

const MainScreen = () => {
    const [letter, setLetter] = useState(null);
    const [fontstyle, setFontStyle] = useState('bold');
    const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");
    
    return (
        <main className='main-content'>
            <div className='main-content-top'>
                <div className="container">
                <ContentView 
                    letter={letter} 
                    setLetter={setLetter} 
                    fontstyle={fontstyle}
                    setFontStyle={setFontStyle}
                    fontName={activeFontFamily}
                />
                </div>
                
            </div>

            <div className="sidebar">
                <FontSelector activeFontFamily={activeFontFamily} setActiveFontFamily={setActiveFontFamily} />
            </div>
            
            <div className='main-content-bottom'>
                
            <div className="container">
                <Rules letter={letter} setLetter={setLetter} fontName={activeFontFamily} />
            </div>
                
            </div>
        </main>
    );
};

export default MainScreen;