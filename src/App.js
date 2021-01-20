import React from 'react';
import MonsterList from './monsterList';
import './global.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {level: '', filters: []};

    this.levelChange = this.levelChange.bind(this);
    this.handleFilterChanged = this.handleFilterChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFilterChanged(event){
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    if (value){
      this.setState({filters: this.state.filters.concat(event.target.value)})
    }
    else {
      this.setState({filters: this.state.filters.filter(filters => filters !== event.target.value)})
    }
  }

  levelChange(event){
    if (event.target.value >= -1 && event.target.value <= 30){
      this.setState({level: event.target.value});
    }
  }

  //Prevents form submission when Enter Key is pressed
  handleSubmit(event) {
    event.preventDefault();
  }

  render(){
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <p>Filters</p><br/>
                  <input type="checkbox" id ="filter-negative-one" name="levelFilter" value="-1" onChange={this.handleFilterChanged}/>
                  <label htmlFor="filter-zero">-1</label> <br/>
                  <input type="checkbox" id ="filter-zero" name="levelFilter" value="0" onChange={this.handleFilterChanged}/>
                  <label htmlFor="filter-zero">0</label> <br/>
                  <input type="checkbox" id ="filter-one" name="levelFilter" value="1" onChange={this.handleFilterChanged}/>
                  <label htmlFor="filter-one">1</label> <br/>
                  <input type="checkbox" id ="filter-two" name="levelFilter" value="2" onChange={this.handleFilterChanged}/>
                  <label htmlFor="filter-two">2</label> <br/>
                  <input type="checkbox" id ="filter-three" name="levelFilter" value="3" onChange={this.handleFilterChanged}/>
                  <label htmlFor="filter-three">3</label> <br/>
                </div>
                <div className="center">
                  <label htmlFor="level">Level</label>
                  <input id="level" value={this.state.level} onChange={this.levelChange} type="number" min="0" max="30"/>
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
            <td><MonsterList/></td>
          </tr>
        </tbody>
      </table>);
  }

}
 
export default App;
