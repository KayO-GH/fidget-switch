import React, { useState, useEffect } from 'react';
import onSwitch from './images/on.png';
import offSwitch from './images/off.png';
import audio from './audio/click.wav';

const App = () => {
  //set up local state
  const [isOn, setIsOn] = useState(true);

  //change background on state change
  useEffect(() => {
    document.body.style.backgroundImage = isOn ?
      "radial-gradient(circle at top,#F1EFEF, #B0B0B3)" :
      "radial-gradient(circle at top,#5A5A5A, #2C2B2B)";
  });

  //set up audio player
  const player = new Audio(audio);

  //click handler
  const handleClick = () => {
    setIsOn(!isOn);
    player.play();
  }

  //render component
  return (
    <div className="App App-header">
      <img src={isOn ? onSwitch : offSwitch} alt="switch" onClick={handleClick} />
    </div>
  );
}

export default App;
