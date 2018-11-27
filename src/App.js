import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: 'db568c5b9b164c43bb638ee0f0eefa06'
});

const particlesOptions = {
  particles: {
    number:{
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  const faces = data.outputs[0].data.regions.map(region => {
    return{
      leftCol:region.region_info.bounding_box.left_col * width,
      topRow: region.region_info.bounding_box.top_row * height,
      rightCol:width - (region.region_info.bounding_box.right_col * width),
      bottomRow: height - (region.region_info.bounding_box.bottom_row * height)
    } 
  })
  return faces;
  
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box:box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }
  
  render() {
    console.log('https://samples.clarifai.com/face-det.jpg');
    return (
      <div className="App">
      <Particles className='particles'
              params={particlesOptions}
            />
        <Logo />
        <ImageLinkForm 
            onInputChange = {this.onInputChange} 
            onButtonSubmit ={this.onButtonSubmit}
        />
        <FaceRecognition box = {this.state.box} imageURL = {this.state.imageURL}/>
        

      </div>
    );
  }
}

export default App;
