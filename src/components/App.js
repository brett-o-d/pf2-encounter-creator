import { useState } from 'react';
import { MonsterXP } from './Constants';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MonsterList from './MonsterList';
import Filters from './Filters';
import EncounterOptions from './EncounterOptions'
import Encounter from './Encounter'
import filterIcon from './assets/filter.png';
import '../global.css';

function App() {
  const [partyLevel, setPartyLevel] = useState(0);
  const [partyCount, setPartyCount] = useState(4);
  const [difficulty, setDifficulty] = useState("");
  const [searchMonstersFilter, setSearchMonstersFilter] = useState("");
  const [usePartyLevelAsFilter, setUsePartyLevelAsFilter] = useState(true);
  const [useXPAsFilter, setUseXPAsFilter] = useState(false);
  const [levelFilter, setLevelFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [alignmentFilter, setAlignmentFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [traitFilter, setTraitFilter] = useState([]);
  const [encounterList, setEncounterList] = useState([]);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const drawerWidth = '175px';
  const filterIconHeight = 50;

  const useStyles = makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    table: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth})`,
        marginLeft: drawerWidth,
      },
    },
    filterIcon: {
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
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
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp>
          <SwipeableDrawer anchor= "left" open={filterDrawerOpen}
            onClose={(event) => filterDrawerToggle(event, false)}
            onOpen={(event) => filterDrawerToggle(event, true)}
            ModalProps={{keepMounted: true,}}> {/* Better open performance on mobile. */}
            <Filters device="mobile" levelFilter={levelFilter} setLevelFilter={setLevelFilter} typeFilter={typeFilter} setTypeFilter={setTypeFilter}
              alignmentFilter={alignmentFilter} setAlignmentFilter={setAlignmentFilter} sizeFilter={sizeFilter} setSizeFilter={setSizeFilter}
              traitFilter={traitFilter} setTraitFilter={setTraitFilter}/>
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer variant="permanent" open>
            <Filters device="desktop" levelFilter={levelFilter} setLevelFilter={setLevelFilter} typeFilter={typeFilter} setTypeFilter={setTypeFilter}
              alignmentFilter={alignmentFilter} setAlignmentFilter={setAlignmentFilter} sizeFilter={sizeFilter} setSizeFilter={setSizeFilter}
              traitFilter={traitFilter} setTraitFilter={setTraitFilter}/>
          </Drawer>
        </Hidden>
      </nav>
      <Hidden smUp>        
        <img className={classes.filterIcon + " icon"} src={filterIcon} alt="filter" onClick={(event) => {filterDrawerToggle(event, true); event.stopPropagation()}}/>
        <EncounterOptions partyLevel={partyLevel} setPartyLevel={setPartyLevel}
          partyCount={partyCount} setPartyCount={setPartyCount} setDifficulty={setDifficulty}
          setUsePartyLevelAsFilter={setUsePartyLevelAsFilter} setUseXPAsFilter={setUseXPAsFilter}/> <br/>
      </Hidden>
      <table className={classes.table} onClick={(event) => filterDrawerToggle(event, false)} onKeyDown={(event) => filterDrawerToggle(event, false)}>
        <tbody>
          <tr> 
            <td className="fullHeightScroll" style={{verticalAlign:"top", minWidth:"160px"}}>
              <div style={{height: `calc(100% - ${filterIconHeight}px) + 10px`}}>
                <Hidden xsDown>
                  <EncounterOptions partyLevel={partyLevel} setPartyLevel={setPartyLevel}
                    partyCount={partyCount} setPartyCount={setPartyCount} setDifficulty={setDifficulty}
                    setUsePartyLevelAsFilter={setUsePartyLevelAsFilter} setUseXPAsFilter={setUseXPAsFilter}/> <br/>
                </Hidden>
                <Encounter remainingXP={remainingXP} encounterList={encounterList} partyLevel={partyLevel} encounterXP={encounterXP}
                  RemoveFromEncounterList={RemoveFromEncounterList}/>
              </div>
            </td>
            <td>
              <MonsterList searchMonstersFilter={searchMonstersFilter} setSearchMonstersFilter={setSearchMonstersFilter}
                levelFilter={levelFilter} typeFilter={typeFilter} alignmentFilter={alignmentFilter} sizeFilter={sizeFilter} traitFilter={traitFilter}
                partyLevel={partyLevel} usePartyLevelAsFilter={usePartyLevelAsFilter} 
                useXPAsFilter={useXPAsFilter} remainingXP={remainingXP} AddtoEncounterList={AddtoEncounterList}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
