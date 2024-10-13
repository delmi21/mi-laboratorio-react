import React from 'react';

// Componente que recibe una función de reset como prop
function ResetButton(props) {
  return <button onClick={props.onReset}>Resetear Contador</button>;
}

export default ResetButton;


