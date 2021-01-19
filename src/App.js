import React from 'react';
import otariBestiary from './bestiaries/troubles-in-otari-bestiary.json';
import MonsterList from './monsterList';

class App extends React.Component {
  render(){
    var value = '';
    console.log(otariBestiary);
    for (let index = 0; index < otariBestiary.length; index++) {
      const monster = otariBestiary[index];
      value += monster.name + ", ";
    }
    value = value;
    return <MonsterList/>;
  }

}
 
export default App;
 