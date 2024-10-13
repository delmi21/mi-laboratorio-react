import React from 'react';

// Componente que muestra el valor del contador
function DisplayCounter(props) {
  return <h2>El contador es: {props.count}</h2>;
}

export default DisplayCounter;
