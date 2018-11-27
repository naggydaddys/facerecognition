import React from 'react';
import './FaceRecognition.css';
import shortid from 'shortid';

const FaceRecognition= ({imageURL, box}) => {

        const facesArr = ()=> {
            if(box){
                try{
                    const newArr =  box.map(face => {
                        return <div className='bounding-box' key={shortid.generate()} style={{top:face.topRow,left:face.leftCol,right:face.rightCol, bottom:face.bottomRow}}></div>
                    })
                    return newArr
                }
                catch(err){
                    console.log(err)
                }
            }
            return null
        }
        
    return (
        <div className = 'center ma'>
            <div className = 'absolute mt2'>
                <img id = 'inputImage' alt='' src = {imageURL} width = '500px' height = 'auto'/>
                {facesArr()} 
            </div>
        </div>
    )
}
export default FaceRecognition;
