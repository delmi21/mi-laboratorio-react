import React, { useState } from 'react';
import Greeting from './Greeting';
import DisplayCounter from './DisplayCounter';
import ResetButton from './ResetButton';
import './styl.css';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setCount(count + 1);  // Incrementar el contador
  };

  const handleReset = () => {
    setCount(0);  // Restablecer el contador a 0
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);  // Actualizar el valor del input
  };

  const handleSetCount = () => {
    setCount(Number(inputValue));  // Establecer el contador con el valor del input
  };

  const greetingMessage = "¡Hola, bienvenido a React!";

  return (
    <div>
      <Greeting message={greetingMessage} />
      <Greeting message="Espero que disfrutes aprendiendo React" />

      <DisplayCounter count={count} />

      <button onClick={handleButtonClick}>Incrementar</button>

      <ResetButton onReset={handleReset} />

      {/* Campo de entrada y botón para establecer un valor personalizado */}
      <input 
        type="number" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Introduce un valor"
      />
      <button onClick={handleSetCount}>Establecer Contador</button>
    </div>
  );
}

export default App;