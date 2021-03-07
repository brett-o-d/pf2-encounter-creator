import ashesBestiary from '../bestiaries/age-of-ashes-bestiary.json'
import edgewatchBestiary from '../bestiaries/agents-of-edgewatch-bestiary.json'
import extinctionCurseBestiary from '../bestiaries/extinction-curse-bestiary.json'
import plaguestoneBestiary from '../bestiaries/fall-of-plaguestone.json'
import menaceUnderOtariBestiary from '../bestiaries/menace-under-otari-bestiary.json'
import pathfinderBestiary from '../bestiaries/pathfinder-bestiary.json'
import pathfinderBestiary2 from '../bestiaries/pathfinder-bestiary-2.json'
import season1Bestiary from '../bestiaries/pfs-season-1-bestiary.json'
import season2Bestiary from '../bestiaries/pfs-season-2-bestiary.json'
import slitheringBestiary from '../bestiaries/the-slithering-bestiary.json'
import troublesInOtariBestiary from '../bestiaries/troubles-in-otari-bestiary.json';
import { MonsterXP } from "./Constants";
import { makeStyles } from '@material-ui/core/styles';
import '../global.css';
import './css/MonsterList.css';

function MonsterList(props) {
    const searchMonstersFilter = props.searchMonstersFilter;
    const setSearchMonstersFilter = props.setSearchMonstersFilter;
    const levelFilter = props.levelFilter;
    const typeFilter = props.typeFilter;
    const alignmentFilter = props.alignmentFilter;
    const partyLevel = props.partyLevel;
    const usePartyLevelAsFilter = props.usePartyLevelAsFilter;
    const useXPAsFilter = props.useXPAsFilter;
    const remainingXP = props.remainingXP;
    const AddtoEncounterList = props.AddtoEncounterList;

    const useStyles = makeStyles((theme) => ({
        rightAlignOrFill: {
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                lineHeight: '120%'
            },
        },
    }));

      
    const classes = useStyles();

    function IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP){
        //Monster Type
        if (typeFilter.length !== 0 && !typeFilter.includes(monsterType)){
            return false;
        }
        
        //Alignment
        if (alignmentFilter.length !== 0 && !alignmentFilter.includes(monsterAlignment)){
            return false;
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

    function MonsterLayoutBuilder(monster, monsterLevel, monsterXP){
        return <li name={monster.name} key={monster._id} level={monsterLevel} monsterxp={monsterXP}>
            <div className="flex-container">
                <div>
                    Name: {monster.name} <br/>
                    Level: {monsterLevel} XP: {monsterXP}
                </div>
                <div className={classes.rightAlignOrFill}>
                    <button onClick={() => AddToEncounter(monster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
                    <a href={monster.data.details.nethysUrl} target="_blank"  style={{float:'right'}}>Nethys</a>
                </div>
            </div>
        </li>            
    }

    var rows = [];
    // ashesBestiary.forEach((ashesMonster) => {        
    //     const monsterLevel = ashesMonster.data.details.level.value;
        // const monsterType = ashesMonster.data.details.creatureType;
    //     const monsterAlignment = ashesMonster.data.details.alignment.value;
    // //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            // rows.push(MonsterLayoutBuilder(ashesMonster, monsterLevel, monsterXP));
    //     }
    // });

    // edgewatchBestiary.forEach((edgewatchMonster) => {
    //     const monsterLevel = edgewatchMonster.data.details.level.value;
        // const monsterType = edgewatchMonster.data.details.creatureType;
    //     const monsterAlignment = edgewatchMonster.data.details.alignment.value;
    // //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            // rows.push(MonsterLayoutBuilder(edgewatchMonster, monsterLevel, monsterXP));
    //     }
    // });

    // extinctionCurseBestiary.forEach((extinctionCurseMonster) => {
    //     const monsterLevel = extinctionCurseMonster.data.details.level.value;
        // const monsterType = extinctionCurseMonster.data.details.creatureType;
    //     const monsterAlignment = extinctionCurseMonster.data.details.alignment.value;
    // //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            // rows.push(MonsterLayoutBuilder(extinctionCurseMonster, monsterLevel, monsterXP));
    //     }
    // });

    // plaguestoneBestiary.forEach((plaguestoneMonster) => {
    //     const monsterLevel = plaguestoneMonster.data.details.level.value;
        // const monsterType = plaguestoneMonster.data.details.creatureType;
    //     const monsterAlignment = plaguestoneMonster.data.details.alignment.value;
    // //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            // rows.push(MonsterLayoutBuilder(plaguestoneMonster, monsterLevel, monsterXP));
    //     }
    // });

    // menaceUnderOtariBestiary.forEach((menaceUnderOtariMonster) => {
    //     const monsterLevel = menaceUnderOtariMonster.data.details.level.value;
        // const monsterType = menaceUnderOtariMonster.data.details.creatureType;
    //     const monsterAlignment = menaceUnderOtariMonster.data.details.alignment.value;
    // //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            // rows.push(MonsterLayoutBuilder(menaceUnderOtariMonster, monsterLevel, monsterXP));
    //     }
    // });

    pathfinderBestiary.forEach((pathfinderMonster) => {
        const monsterLevel = pathfinderMonster.data.details.level.value;
        const monsterType = pathfinderMonster.data.details.creatureType;
        const monsterAlignment = pathfinderMonster.data.details.alignment.value;
        const monsterXP = MonsterXP[monsterLevel - partyLevel];
        if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            rows.push(MonsterLayoutBuilder(pathfinderMonster, monsterLevel, monsterXP));
        }
    });

    pathfinderBestiary2.forEach((pathfinderMonster2) => {
        const monsterLevel = pathfinderMonster2.data.details.level.value;
        const monsterType = pathfinderMonster2.data.details.creatureType;
        const monsterAlignment = pathfinderMonster2.data.details.alignment.value;
        const monsterXP = MonsterXP[monsterLevel - partyLevel];
        if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            rows.push(MonsterLayoutBuilder(pathfinderMonster2, monsterLevel, monsterXP));
        }
    });

    // season1Bestiary.forEach((season1Monster) => {
    //     const monsterLevel = season1Monster.data.details.level.value;
        // const monsterType = season1Monster.data.details.creatureType;
    //     const monsterAlignment = season1Monster.data.details.alignment.value;
    // //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            // rows.push(MonsterLayoutBuilder(season1Monster, monsterLevel, monsterXP));
    //     }
    // });

    // season2Bestiary.forEach((season2Monster) => {
    //     const monsterLevel = season2Monster.data.details.level.value;
        // const monsterType = season2Monster.data.details.creatureType;
    //     const monsterAlignment = season2Monster.data.details.alignment.value;
    // //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            // rows.push(MonsterLayoutBuilder(season2Monster, monsterLevel, monsterXP));
    //     }
    // });

    // slitheringBestiary.forEach((slitheringMonster) => {
    //     const monsterLevel = slitheringMonster.data.details.level.value;
        // const monsterType = slitheringMonster.data.details.creatureType;
    //     const monsterAlignment = slitheringMonster.data.details.alignment.value;
    // //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            // rows.push(MonsterLayoutBuilder(slitheringMonster, monsterLevel, monsterXP));
    //     }
    // });

    // troublesInOtariBestiary.forEach((troublesInOtariMonster) => {
    //     const monsterLevel = troublesInOtariMonster.data.details.level.value;
        // const monsterType = troublesInOtariMonster.data.details.creatureType;
    //     const monsterAlignment = troublesInOtariMonster.data.details.alignment.value;
    // //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterType, monsterAlignment, monsterXP) ) {
            // rows.push(MonsterLayoutBuilder(troublesInOtariMonster, monsterLevel, monsterXP));
    //     }
    // });
    
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
