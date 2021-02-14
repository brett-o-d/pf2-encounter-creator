import { useState } from 'react';
import { MonsterXP } from './Constants';
import MonsterList from './MonsterList';
import Filters from './Filters';
import EncounterOptions from './EncounterOptions'
import Encounter from './Encounter'
import '../global.css';

function App() {
  const [partyLevel, setPartyLevel] = useState(0);
  const [partyCount, setPartyCount] = useState(4);
  const [difficulty, setDifficulty] = useState("");
  const [usePartyLevelAsFilter, setUsePartyLevelAsFilter] = useState(false);
  const [useXPAsFilter, setUseXPAsFilter] = useState(false);
  const [filter, setFilter] = useState([]);
  const [encounterList, setEncounterList] = useState([]);

  function AddtoEncounterList(monster){
    setEncounterList(encounterList.concat(monster));
  }

  function RemoveFromEncounterList(id){
    var newEncounterList = [...encounterList];
    newEncounterList.splice(id, 1);
    setEncounterList(newEncounterList);
  }

  // Threat	  XP Budget	  Character Adjustment
  // Trivial	40 or less	10 or less
  // Low	    60	        15
  // Moderate	80	        20
  // Severe	  120	        30
  // Extreme	160	        40

  const difficultyXP = {trivial: 40, low: 60, moderate: 80, severe: 120, extreme: 160}
  const characterXP = {trivial: 10, low: 15, moderate: 20, severe: 30, extreme: 40}
  const encounterXP = encounterList.reduce((total, monster) => MonsterXP[monster.data.details.level.value - partyLevel] + total,0);
  const remainingXP = Number.isNaN(encounterXP) ? "Invalid Encounter (Monster level out of range for party)" : (difficulty === "" ? 0 : difficultyXP[difficulty] - ((4 - partyCount) * characterXP[difficulty]) - encounterXP);

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Filters filter={filter} setFilter={setFilter}/>
          </td>
          <td>
            <EncounterOptions partyLevel={partyLevel} setPartyLevel={setPartyLevel}
              partyCount={partyCount} setPartyCount={setPartyCount} setDifficulty={setDifficulty}
              setUsePartyLevelAsFilter={setUsePartyLevelAsFilter} setUseXPAsFilter={setUseXPAsFilter}/> <br/>
            <Encounter remainingXP={remainingXP} encounterList={encounterList} partyLevel={partyLevel} encounterXP={encounterXP}
              RemoveFromEncounterList={RemoveFromEncounterList}/>
          </td>
          <td>
            <MonsterList filter={filter} partyLevel={partyLevel} usePartyLevelAsFilter={usePartyLevelAsFilter} 
              useXPAsFilter={useXPAsFilter} remainingXP={remainingXP} AddtoEncounterList={AddtoEncounterList}/>
          </td>
        </tr>
      </tbody>
    </table>);
}

export default App;
