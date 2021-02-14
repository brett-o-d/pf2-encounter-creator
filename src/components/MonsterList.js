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
import '../global.css';
import './css/MonsterList.css';

function MonsterList(props) {
    const searchMonstersFilter = props.searchMonstersFilter;
    const setSearchMonstersFilter = props.setSearchMonstersFilter;
    const filter = props.filter;
    const partyLevel = props.partyLevel;
    const usePartyLevelAsFilter = props.usePartyLevelAsFilter;
    const useXPAsFilter = props.useXPAsFilter;
    const remainingXP = props.remainingXP;
    const AddtoEncounterList = props.AddtoEncounterList;

    function IsInFilter(monsterLevel, monsterXP){
        if (filter.length !== 0 && !filter.includes(monsterLevel)){
            return false;
        }
        else if (usePartyLevelAsFilter && (monsterLevel === undefined || Math.abs(partyLevel - monsterLevel) > 4)){
            return false;
        }
        else if (useXPAsFilter && (monsterXP === undefined || monsterXP > remainingXP)){
            return false;
        }
        return true;
    }

    function SearchMonstersFilter(event){
        setSearchMonstersFilter(event.target.value);
    }

    const AddToEncounter = (event, monster) => {
        AddtoEncounterList(monster);
    }

    var rows = [];
    // ashesBestiary.forEach((ashesMonster) => {        
    //     const monsterLevel = ashesMonster.data.details.level.value;
    //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterXP) ) {
    //         rows.push(<li name={ashesMonster.name} key={ashesMonster._id} level={monsterLevel} monsterxp={monsterXP}>
    //             Name: {ashesMonster.name} 
    //             <button onClick={(event) => AddToEncounter(event, ashesMonster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
    //             Level: {monsterLevel} XP: {monsterXP}
                // <a href={ashesMonster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
    //     }
    // });
    // edgewatchBestiary.forEach((edgewatchMonster) => {
    //     const monsterLevel = edgewatchMonster.data.details.level.value;
    //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterXP) ) {
    //         rows.push(<li name={edgewatchMonster.name} key={edgewatchMonster._id} level={monsterLevel} monsterxp={monsterXP}>
    //             Name: {edgewatchMonster.name} 
    //             <button onClick={(event) => AddToEncounter(event, edgewatchMonster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
    //             Level: {monsterLevel} XP: {monsterXP}
                // <a href={edgewatchMonster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
    //     }
    // });
    // extinctionCurseBestiary.forEach((extinctionCurseMonster) => {
    //     const monsterLevel = extinctionCurseMonster.data.details.level.value;
    //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterXP) ) {
    //         rows.push(<li name={extinctionCurseMonster.name} key={extinctionCurseMonster._id} level={monsterLevel} monsterxp={monsterXP}>
    //             Name: {extinctionCurseMonster.name}
    //             <button onClick={(event) => AddToEncounter(event, extinctionCurseMonster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
    //             Level: {monsterLevel} XP: {monsterXP}
                // <a href={extinctionCurseMonster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
    //     }
    // });
    // plaguestoneBestiary.forEach((plaguestoneMonster) => {
    //     const monsterLevel = plaguestoneMonster.data.details.level.value;
    //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterXP) ) {
    //         rows.push(<li name={plaguestoneMonster.name} key={plaguestoneMonster._id} level={monsterLevel} monsterxp={monsterXP}>
    //             Name: {plaguestoneMonster.name}
    //             <button onClick={(event) => AddToEncounter(event, plaguestoneMonster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
    //             Level: {monsterLevel} XP: {monsterXP}
                // <a href={plaguestoneMonster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
    //     }
    // });
    // menaceUnderOtariBestiary.forEach((menaceUnderOtariMonster) => {
    //     const monsterLevel = menaceUnderOtariMonster.data.details.level.value;
    //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterXP) ) {
    //         rows.push(<li name={menaceUnderOtariMonster.name} key={menaceUnderOtariMonster._id} level={monsterLevel} monsterxp={monsterXP}>
    //             Name: {menaceUnderOtariMonster.name}
    //             <button onClick={(event) => AddToEncounter(event, menaceUnderOtariMonster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
    //             Level: {monsterLevel} XP: {monsterXP}
                // <a href={menaceUnderOtariMonster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
    //     }
    // });
    pathfinderBestiary.forEach((pathfinderMonster) => {
        const monsterLevel = pathfinderMonster.data.details.level.value;
        const monsterXP = MonsterXP[monsterLevel - partyLevel];
        if ( IsInFilter(monsterLevel, monsterXP) ) {
            rows.push(<li name={pathfinderMonster.name} key={pathfinderMonster._id} level={monsterLevel} monsterxp={monsterXP}>
                Name: {pathfinderMonster.name}
                <button onClick={(event) => AddToEncounter(event, pathfinderMonster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
                Level: {monsterLevel} XP: {monsterXP}
                <a href={pathfinderMonster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
        }
    });
    pathfinderBestiary2.forEach((pathfinderMonster2) => {
        const monsterLevel = pathfinderMonster2.data.details.level.value;
        const monsterXP = MonsterXP[monsterLevel - partyLevel];
        if ( IsInFilter(monsterLevel, monsterXP) ) {
            rows.push(<li name={pathfinderMonster2.name} key={pathfinderMonster2._id} level={monsterLevel} monsterxp={monsterXP}>
                Name: {pathfinderMonster2.name}
                <button onClick={(event) => AddToEncounter(event, pathfinderMonster2)} style={{float:'right'}}>Add to Encounter</button> <br/> 
                Level: {monsterLevel} XP: {monsterXP}
                <a href={pathfinderMonster2.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
        }
    });
    // season1Bestiary.forEach((season1Monster) => {
    //     const monsterLevel = season1Monster.data.details.level.value;
    //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterXP) ) {
    //         rows.push(<li name={season1Monster.name} key={season1Monster._id} level={monsterLevel} monsterxp={monsterXP}>
    //             Name: {season1Monster.name}
    //             <button onClick={(event) => AddToEncounter(event, season1Monster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
                // Level: {monsterLevel} XP: {monsterXP}
                // <a href={season1Monster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
    //     }
    // });
    // season2Bestiary.forEach((season2Monster) => {
    //     const monsterLevel = season2Monster.data.details.level.value;
    //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterXP) ) {
    //         rows.push(<li name={season2Monster.name} key={season2Monster._id} level={monsterLevel} monsterxp={monsterXP}>
    //             Name: {season2Monster.name}
    //             <button onClick={(event) => AddToEncounter(event, season2Monster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
    //             Level: {monsterLevel} XP: {monsterXP}
                // <a href={season2Monster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
    //     }
    // });
    // slitheringBestiary.forEach((slitheringMonster) => {
    //     const monsterLevel = slitheringMonster.data.details.level.value;
    //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterXP) ) {
    //         rows.push(<li name={slitheringMonster.name} key={slitheringMonster._id} level={monsterLevel} monsterxp={monsterXP}>
    //             Name: {slitheringMonster.name}
    //             <button onClick={(event) => AddToEncounter(event, slitheringMonster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
    //             Level: {monsterLevel} XP: {monsterXP}
                // <a href={slitheringMonster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
    //     }
    // });
    // troublesInOtariBestiary.forEach((troublesInOtariMonster) => {
    //     const monsterLevel = troublesInOtariMonster.data.details.level.value;
    //     const monsterXP = MonsterXP[monsterLevel - partyLevel];
    //     if ( IsInFilter(monsterLevel, monsterXP) ) {
    //         rows.push(<li name={troublesInOtariMonster.name} key={troublesInOtariMonster._id} level={monsterLevel} monsterxp={monsterXP}>
    //             Name: {troublesInOtariMonster.name} 
    //             <button onClick={(event) => AddToEncounter(event, troublesInOtariMonster)} style={{float:'right'}}>Add to Encounter</button> <br/> 
    //             Level: {monsterLevel} XP: {monsterXP}
                // <a href={troublesInOtariMonster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>)
    //     }
    // });
    
    rows.sort(compareMonsters);
    
    if (searchMonstersFilter !== "")
    {
        rows = rows.filter(r => r.props.name.toLowerCase().includes(searchMonstersFilter.toLowerCase()))
    }

    return (
    <div>
        <input type="text" id="monsterSearch" onChange={(event) => SearchMonstersFilter(event)} placeholder="Search Monsters..."/>
        <br/>
        <ul className="fullHeightScroll">
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
