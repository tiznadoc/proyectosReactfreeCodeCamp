import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Clicker from './components/Clicker';

function App() {

  const manageClick = () => {
    console.log('Click');
  }

  const rebootCounter = () => {
    console.log('Reboot');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp' 
        />
      </div>
      <div className='main-container'>
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
