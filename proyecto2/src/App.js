import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Clicker from './components/Clicker';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [clicksNumber, setclicksNumber] = useState(0);

  const manageClick = () => {
    setclicksNumber(clicksNumber + 1);
  }

  const rebootCounter = () => {
    setclicksNumber(0);
  }

  return (
    <div className="app">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp' 
        />
      </div>
      <div className='main-container'>
        <Counter clicksNumber={clicksNumber} />
        <Clicker
          text= 'Click'
          clickButton={true}
          manageClick={manageClick}/>
        <Clicker
          text= 'Reboot'
          clickButton={false}
          manageClick={rebootCounter}/>
      </div>
    </div>
  );
}

export default App;
