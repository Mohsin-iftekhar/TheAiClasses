import React, { useState } from 'react';

import { loadModels } from './helpers/faceApi';
import { createFaLibrary } from './helpers/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from 'react-switch';
import Camera from './components/Camera/Camera';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './App.css';
import Front from './components/Info/Inform';
import Camera2 from './components/Camera/Camera2';
import Features from './components/Features/Features';
import Navbarr from './components/Navbars/Navbar'
createFaLibrary();

loadModels();
function App() {

  const [mode, setMode] = useState(false); //true = photo mode; false = video mode
  const [mode2,setMode2]=useState(true);
  const [checked, setChecked] = useState(false);
  const[camon,setCamon]=useState(false);
  const [timer, settimer] = useState()
const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'ClassMode', value: '1' },
    { name: 'TestMode', value: '2' },
  ];
 function f1(e){
  setRadioValue(e.currentTarget.value);
 }
 function f2(){
  setMode2(!mode2);
  console.log({mode2})
 }
  return (
    <div className="App">
<Navbarr/>

<Front/>
<br/>
<br/>
<Features/>
      <header >
      <br/><br/>
      <h1>Our AI in Action</h1>
      <br/><br/>
        <div className="App__header">
          <div className="App__switcher">
          Snapshot &nbsp;
            <FontAwesomeIcon icon="camera" color={mode ? '#007c6c' : '#cccccc'} />
            <Switch
              onChange={() => setMode(!mode)}
              uncheckedIcon={false}
              checkedIcon={false}
              checked={!mode}
              className="App__switcher-switch"
            />
            <FontAwesomeIcon icon="video" color={!mode ? '#007c6c' : '#cccccc'} />
            &nbsp;  Video
          </div>
          <div className="App__switcher">
         Camera off  &nbsp;
          <FontAwesomeIcon icon="camera-slash" color={!camon ? '#007c6c' : '#cccccc'} />
          <Switch
            onChange={() => setCamon(!camon)}
            uncheckedIcon={false}
            checkedIcon={false}
            checked={camon}
            className="App__switcher-switch"
          />
          <FontAwesomeIcon icon="video" color={camon ? '#007c6c' : '#cccccc'} />
          &nbsp;   Camera On
        </div>
        
          <div className="App__switcher">
          <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant= 'outline-success' 
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {f1(e);f2();}}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
         
        </div>
        </div>
      </header>
      {camon ? (
        <Camera photoMode={mode} photoMode2={mode2} cameraon={camon}
        photo={camon} setphoto={setCamon}
        />
      ):(
        <>
       <Camera2 photo={camon} setphoto={setCamon}/>
       </>
      )
      
      }
      
      
    </div>
  );
}

export default App;
