import React from 'react';
import otariBestiary from './bestiaries/troubles-in-otari-bestiary.json';

function App() {
  var value = '';
  console.log(otariBestiary);
  for (let index = 0; index < otariBestiary.length; index++) {
    const monster = otariBestiary[index];
    value += monster.name + ", ";
  }
  // value = 'World';
  return <div>Hello {value}</div>;
}
 
export default App;
 