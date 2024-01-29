import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Button';
import { isOperator } from './components/Button';
import Input from './components/Input';
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    const lastChar = input.slice(-1);

    if (isOperator(value) && isOperator(lastChar)) {
      setInput(input.slice(0, -1) + value);
    } else {
      if (input.startsWith('Error')) {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  
  const calculate = () => {
    try {
      if (input) {
        setInput(evaluate(input).toString());
      } else {
        setInput(''); // Clear the input if it's empty
      }
    } catch (error) {
      setInput('Error'); // Display an error message
    }
  };
  
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freeCodeCamp logo'
        />
      </div>
      <div className='calculator-container'>
        <Input input={input}/>
        <div className='row'>
          <Button clickManager={addInput}>1</Button>
          <Button clickManager={addInput}>2</Button>
          <Button clickManager={addInput}>3</Button>
          <Button clickManager={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickManager={addInput}>4</Button>
          <Button clickManager={addInput}>5</Button>
          <Button clickManager={addInput}>6</Button>
          <Button clickManager={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickManager={addInput}>7</Button>
          <Button clickManager={addInput}>8</Button>
          <Button clickManager={addInput}>9</Button>
          <Button clickManager={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickManager={calculate}>=</Button>
          <Button clickManager={addInput}>0</Button>
          <Button clickManager={addInput}>.</Button>
          <Button clickManager={addInput}>/</Button>
        </div>
        <div className='row'>
          <Clear clearManager={() => setInput('')}>
            Clear
          </Clear>
        </div>
      </div>
      <div className="developer-info-container">
        <p>
          developed by{' '}
          <a
            href="https://github.com/tiznadoc"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            tiznadoc
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;