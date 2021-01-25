import { useState } from 'react';
import MonsterList from './MonsterList';
import Filters from './Filters';
import EncounterOptions from './EncounterOptions'
import '../global.css';

function App() {
  const [level, setLevel] = useState(0);
  const [useLevelAsFilter, setUseLevelAsFilter] = useState(false);
  const [filter, setFilter] = useState([]);

  return (
    <table className="fullHeightScroll">
      <tbody>
        <tr>
          <td>
            <Filters filter={filter} setFilter={setFilter}/>
          </td>
          <td>
            <EncounterOptions level={level} setLevel={setLevel} useLevelAsFilter={useLevelAsFilter} setUseLevelAsFilter={setUseLevelAsFilter}/>
          </td>
          <td>
            <MonsterList filter={filter} level={level} useLevelAsFilter={useLevelAsFilter}/>
          </td>
        </tr>
      </tbody>
    </table>);
}

export default App;
