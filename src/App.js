import React, { useState } from 'react';
import MonsterList from './monsterList';
import './global.css'

function App() {
  const [level, setLevel] = useState(0);
  const [filter, setFilter] = useState([]);

  const handleFilterChanged = (event) => {
    if (event.target.checked){
      const newFilter = filter.concat(event.target.value);
      setFilter(newFilter);
    }
    else {
      const newFilter = filter.filter(filters => filters !== event.target.value);    
      setFilter(newFilter);
    }
  }

//   handleFilterChanged(event){
//     const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
//     if (value){
//       const newFilter = this.state.filters.concat(event.target.value);
//       this.setState({filters: newFilter})
//     }
//     else {
//       const newFilter = this.state.filters.filter(filters => filters !== event.target.value);
//       this.setState({filters: newFilter})
//     }
//   }

  const levelChange = (event) => {
    if (event.target.value >= -1 && event.target.value <= 30){
      setLevel(event.target.value);
    }
  }
  
  //Prevents form submission when Enter Key is pressed
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div>
                <p>Filters</p><br/>
                <input type="checkbox" id ="filter-negative-one" name="levelFilter" value="-1" onChange={(event) => handleFilterChanged(event)}/>
                <label htmlFor="filter-zero">-1</label> <br/>
                <input type="checkbox" id ="filter-zero" name="levelFilter" value="0" onChange={(event) => handleFilterChanged(event)}/>
                <label htmlFor="filter-zero">0</label> <br/>
                <input type="checkbox" id ="filter-one" name="levelFilter" value="1" onChange={(event) => handleFilterChanged(event)}/>
                <label htmlFor="filter-one">1</label> <br/>
                <input type="checkbox" id ="filter-two" name="levelFilter" value="2" onChange={(event) => handleFilterChanged(event)}/>
                <label htmlFor="filter-two">2</label> <br/>
                <input type="checkbox" id ="filter-three" name="levelFilter" value="3" onChange={(event) => handleFilterChanged(event)}/>
                <label htmlFor="filter-three">3</label> <br/>
              </div>
              <div className="center">
                <label htmlFor="level">Level</label>
                <input id="level" value={level} onChange={(event) => levelChange(event)} type="number" min="0" max="30"/>
              </div>
              <br/>
              <p>Difficulty</p>
              <input id="trivial" type="radio" name="difficulty"/>
              <label htmlFor="trivial">Trivial</label>
              <input id="low" type="radio" name="difficulty"/>
              <label htmlFor="low">Low</label>
              <input id="moderate" type="radio" name="difficulty"/>
              <label htmlFor="moderate">Moderate</label>
              <input id="severe" type="radio" name="difficulty"/>
              <label htmlFor="severe">Severe</label>
              <input id="extreme" type="radio" name="difficulty"/>
              <label htmlFor="extreme">Extreme</label>
            </form>
          </td>
          <td><MonsterList filter={filter}/></td>
        </tr>
      </tbody>
    </table>);
}

export default App;
