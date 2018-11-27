import React from 'react';
import './ImageLinkForm.css';


// destructure onInputChange and onButtonSubmit from the props
const ImageLinkForm= ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 center w-50'>
                {'Busy Bee will detect the faces in your pictures. Give it a try by entering an image url below!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className = 'f4 pa2 w-70 center' type = 'text' onChange = {onInputChange}/>
                    <button className = 'gold w-30 grow f4 link ph3 pv2 dib black'
                    onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
        
    )
}
export default ImageLinkForm;
