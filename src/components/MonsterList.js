// import ashesBestiary from '../bestiaries/age-of-ashes-bestiary.json'
// import edgewatchBestiary from '../bestiaries/agents-of-edgewatch-bestiary.json'
// import extinctionCurseBestiary from '../bestiaries/extinction-curse-bestiary.json'
// import plaguestoneBestiary from '../bestiaries/fall-of-plaguestone.json'
// import menaceUnderOtariBestiary from '../bestiaries/menace-under-otari-bestiary.json'
import pathfinderBestiary from '../bestiaries/pathfinder-bestiary.json'
import pathfinderBestiary2 from '../bestiaries/pathfinder-bestiary-2.json'
// import season1Bestiary from '../bestiaries/pfs-season-1-bestiary.json'
// import season2Bestiary from '../bestiaries/pfs-season-2-bestiary.json'
// import slitheringBestiary from '../bestiaries/the-slithering-bestiary.json'
// import troublesInOtariBestiary from '../bestiaries/troubles-in-otari-bestiary.json';
import { MonsterXP } from "./Constants";
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import '../global.css';
import './css/MonsterList.css';

function MonsterList(props) {
    const searchMonstersFilter = props.searchMonstersFilter;
    const setSearchMonstersFilter = props.setSearchMonstersFilter;
    const levelFilter = props.levelFilter;
    const typeFilter = props.typeFilter;
    const alignmentFilter = props.alignmentFilter;
    const sizeFilter = props.sizeFilter;
    const traitFilter = props.traitFilter;
    const partyLevel = props.partyLevel;
    const usePartyLevelAsFilter = props.usePartyLevelAsFilter;
    const useXPAsFilter = props.useXPAsFilter;
    const remainingXP = props.remainingXP;
    const AddtoEncounterList = props.AddtoEncounterList;

    const useStyles = makeStyles((theme) => ({
        rightAlignOrFill: {
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                lineHeight: '140%'
            },
        },
    }));

      
    const classes = useStyles();

    function IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterSize, monsterTraits, monsterXP){
        //Monster Type
        if (typeFilter.length !== 0 && !typeFilter.includes(monsterType)){
            return false;
        }
        
        //Alignment
        if (alignmentFilter.length !== 0 && !alignmentFilter.includes(monsterAlignment)){
            return false;
        }

        //Size
        if (sizeFilter.length !== 0 && !sizeFilter.includes(monsterSize)){
            return false;
        }

        //Trait
        var hasTrait = false;
        if (traitFilter.length !== 0){
            monsterTraits.forEach(trait => {
                if (traitFilter.map(filter => filter.toLowerCase()).includes(trait)){
                    hasTrait = true;
                    return;
                }
            });
            if (!hasTrait){                
                return false;
            }
        }

        //Monster Level 
        if (levelFilter.length !== 0 && !levelFilter.includes(monsterLevel)){
            return false;
        }
        //Within Party Level +-4
        else if (usePartyLevelAsFilter && (monsterLevel === undefined || Math.abs(partyLevel - monsterLevel) > 4)){
            return false;
        }
        //Remaining XP
        else if (useXPAsFilter && (monsterXP === undefined || monsterXP > remainingXP)){
            return false;
        }
        return true;
    }

    function SearchMonstersFilter(event){
        setSearchMonstersFilter(event.target.value);
    }

    const AddToEncounter = (monster) => {
        AddtoEncounterList(monster);
    }

    function BestiaryParser(bestiary){
        bestiary.forEach((monster) => {
            const monsterLevel = monster.data.details.level.value;
            const monsterType = monster.data.details.creatureType;
            const monsterAlignment = monster.data.details.alignment?.value;
            const monsterSize = monster.data.traits.size?.value;
            const monsterTraits = monster.data.traits.traits?.value;
            const monsterXP = MonsterXP[monsterLevel - partyLevel];
            if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterSize, monsterTraits, monsterXP) ) {
                rows.push(MonsterLayoutBuilder(monster, monsterLevel, monsterXP));
            }
        });
    }

    function MonsterLayoutBuilder(monster, monsterLevel, monsterXP){
        return <li name={monster.name} key={monster._id} level={monsterLevel} monsterxp={monsterXP}>
            <div className="flex-container">
                <div>
                    Name: {monster.name} <br/>
                    Level: {monsterLevel} XP: {monsterXP}
                </div>
                <div className={classes.rightAlignOrFill}>
                    <Hidden smUp>
                        <a href={monster.data.details.nethysUrl} target="_blank" rel="noreferrer" style={{float:'left'}}>Nethys</a>
                    </Hidden>
                    <button onClick={() => AddToEncounter(monster)} style={{float:'right'}}>Add to Encounter</button>
                    <Hidden xsDown>
                        <br/><a href={monster.data.details.nethysUrl} target="_blank" rel="noreferrer" style={{float:'right'}}>Nethys</a>
                    </Hidden> 
                </div>
            </div>
        </li>            
    }

    var rows = [];

    BestiaryParser(pathfinderBestiary);
    BestiaryParser(pathfinderBestiary2);

    // BestiaryParser(ashesBestiary);
    // BestiaryParser(edgewatchBestiary);
    // BestiaryParser(extinctionCurseBestiary);
    // BestiaryParser(plaguestoneBestiary);
    // BestiaryParser(menaceUnderOtariBestiary);
    // BestiaryParser(season1Bestiary);
    // BestiaryParser(season2Bestiary);
    // BestiaryParser(slitheringBestiary);
    // BestiaryParser(troublesInOtariBestiary);
    
    rows.sort(compareMonsters);
    
    if (searchMonstersFilter !== "")
    {
        rows = rows.filter(r => r.props.name.toLowerCase().includes(searchMonstersFilter.toLowerCase()))
    }

    return (
    <div className="fullHeightScroll">
        <input type="text" id="monsterSearch" onChange={(event) => SearchMonstersFilter(event)} placeholder="Search Monsters..."/>
        <br/>
        <ul>
            {rows}
        </ul>
    </div>);
}

function compareMonsters(a, b){
    const aLevel = parseInt(a.props.level);
    const bLevel = parseInt(b.props.level);
    if (isNaN(bLevel) || aLevel < bLevel) {
        return -1;
    }
    if (isNaN(aLevel) || aLevel > bLevel) {
        return 1;
    }
    //a must be equal to b
    return 0;
}

export default MonsterList;
