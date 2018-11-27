import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import bee from './bee.png';

// simple component with no state so we can make a pure function
const Logo= () => {
    return (
        <div className = 'ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img stlye= {{paddingTop:'5px'}}alt = 'bee logo' src = {bee}/>
                </div>
            </Tilt>
        </div>
    )
}
export default Logo;