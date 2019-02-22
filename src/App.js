import React, { useState, useEffect } from 'react';
import onSwitch from './images/on.png';
import offSwitch from './images/off.png';
import audio from './audio/click.wav';

const App = () => {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    document.body.style.backgroundImage = isOn ?
      "radial-gradient(circle at top,#F1EFEF, #B0B0B3)" :
      "radial-gradient(circle at top,#5A5A5A, #2C2B2B)";
  });

  const player = new Audio(audio);

  const handleClick = () => {
    setIsOn(!isOn);
    player.play();
  }

  return (
    <div className="App App-header">
      {/* 
        For some weird reason, we need to wrap the img in a div and use onClick on the div 
        Probably a bug
      */}
      <div onClick={handleClick}>
        <img src={isOn ? onSwitch : offSwitch} alt="switch" />
      </div>

    </div>
  );
}

export default App;
