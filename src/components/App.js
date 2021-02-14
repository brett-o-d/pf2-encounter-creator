import { useState } from 'react';
import { MonsterXP } from './Constants';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MonsterList from './MonsterList';
import Filters from './Filters';
import EncounterOptions from './EncounterOptions'
import Encounter from './Encounter'
import '../global.css';

function App() {
  const [partyLevel, setPartyLevel] = useState(0);
  const [partyCount, setPartyCount] = useState(4);
  const [difficulty, setDifficulty] = useState("");
  const [searchMonstersFilter, setSearchMonstersFilter] = useState("");
  const [usePartyLevelAsFilter, setUsePartyLevelAsFilter] = useState(false);
  const [useXPAsFilter, setUseXPAsFilter] = useState(false);
  const [filter, setFilter] = useState([]);
  const [encounterList, setEncounterList] = useState([]);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const drawerWidth = 50;

  const useStyles = makeStyles((theme) => ({
    table: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    }
  }));
  
  const classes = useStyles();

  const filterDrawerToggle = (event, open) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setFilterDrawerOpen(open);
  }

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
    <div>
      <nav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            anchor= "left"
            open={filterDrawerOpen}
            onClose={(event) => filterDrawerToggle(event, false)}
            onOpen={(event) => filterDrawerToggle(event, true)}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Filters filter={filter} setFilter={setFilter}/>
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" open>
            <Filters filter={filter} setFilter={setFilter}/>
          </Drawer>
        </Hidden>
      </nav>
      <table className={classes.table} onClick={(event) => filterDrawerToggle(event, false)} onKeyDown={(event) => filterDrawerToggle(event, false)}>
        <tbody>
          <tr>
            {/* <td>
              <Filters filter={filter} setFilter={setFilter}/>
            </td> */}
            <td>
              <EncounterOptions partyLevel={partyLevel} setPartyLevel={setPartyLevel}
                partyCount={partyCount} setPartyCount={setPartyCount} setDifficulty={setDifficulty}
                setUsePartyLevelAsFilter={setUsePartyLevelAsFilter} setUseXPAsFilter={setUseXPAsFilter}/> <br/>
              <Encounter remainingXP={remainingXP} encounterList={encounterList} partyLevel={partyLevel} encounterXP={encounterXP}
                RemoveFromEncounterList={RemoveFromEncounterList}/>
            </td>
            <td>
              <MonsterList searchMonstersFilter={searchMonstersFilter} setSearchMonstersFilter={setSearchMonstersFilter}
                filter={filter} partyLevel={partyLevel} usePartyLevelAsFilter={usePartyLevelAsFilter} 
                useXPAsFilter={useXPAsFilter} remainingXP={remainingXP} AddtoEncounterList={AddtoEncounterList}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
