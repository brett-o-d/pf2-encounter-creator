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
import troublesUnderOtariBestiary from '../bestiaries/troubles-in-otari-bestiary.json';
import '../global.css';

function MonsterList(props) {

    const filter = props.filter;
    const level = props.level;
    const useLevelAsFilter = props.useLevelAsFilter;

    var rows = [];
    ashesBestiary.forEach((ashesMonster) => {
        if ( filter.length === 0 || filter.includes(ashesMonster.data.details.level.value)) {
            rows.push(<li key={ashesMonster._id} level={ashesMonster.data.details.level.value}>{ashesMonster.name + " " + ashesMonster.data.details.level.value}</li>)
        }
    });
    edgewatchBestiary.forEach((edgewatchMonster) => {
        if ( filter.length === 0 || filter.includes(edgewatchMonster.data.details.level.value)) {
            rows.push(<li key={edgewatchMonster._id} level={edgewatchMonster.data.details.level.value}>{edgewatchMonster.name + " " + edgewatchMonster.data.details.level.value}</li>)
        }
    });
    extinctionCurseBestiary.forEach((extinctionCurseMonster) => {
        if ( filter.length === 0 || filter.includes(extinctionCurseMonster.data.details.level.value)) {
            rows.push(<li key={extinctionCurseMonster._id} level={extinctionCurseMonster.data.details.level.value}>{extinctionCurseMonster.name + " " + extinctionCurseMonster.data.details.level.value}</li>)
        }
    });
    plaguestoneBestiary.forEach((plaguestoneMonster) => {
        if ( filter.length === 0 || filter.includes(plaguestoneMonster.data.details.level.value)) {
            rows.push(<li key={plaguestoneMonster._id} level={plaguestoneMonster.data.details.level.value}>{plaguestoneMonster.name + " " + plaguestoneMonster.data.details.level.value}</li>)
        }
    });
    menaceUnderOtariBestiary.forEach((menaceUnderOtariMonster) => {
        if ( filter.length === 0 || filter.includes(menaceUnderOtariMonster.data.details.level.value)) {
            rows.push(<li key={menaceUnderOtariMonster._id} level={menaceUnderOtariMonster.data.details.level.value}>{menaceUnderOtariMonster.name + " " + menaceUnderOtariMonster.data.details.level.value}</li>)
        }
    });
    pathfinderBestiary.forEach((pathfinderMonster) => {
        if ( filter.length === 0 || filter.includes(pathfinderMonster.data.details.level.value)) {
            rows.push(<li key={pathfinderMonster._id} level={pathfinderMonster.data.details.level.value}>{pathfinderMonster.name + " " + pathfinderMonster.data.details.level.value}</li>)
        }
    });
    pathfinderBestiary2.forEach((pathfinderMonster2) => {
        if ( filter.length === 0 || filter.includes(pathfinderMonster2.data.details.level.value)) {
            rows.push(<li key={pathfinderMonster2._id} level={pathfinderMonster2.data.details.level.value}>{pathfinderMonster2.name + " " + pathfinderMonster2.data.details.level.value}</li>)
        }
    });
    season1Bestiary.forEach((season1Monster) => {
        if ( filter.length === 0 || filter.includes(season1Monster.data.details.level.value)) {
            rows.push(<li key={season1Monster._id} level={season1Monster.data.details.level.value}>{season1Monster.name + " " + season1Monster.data.details.level.value}</li>)
        }
    });
    season2Bestiary.forEach((season2Monster) => {
        if ( filter.length === 0 || filter.includes(season2Monster.data.details.level.value)) {
            rows.push(<li key={season2Monster._id} level={season2Monster.data.details.level.value}>{season2Monster.name + " " + season2Monster.data.details.level.value}</li>)
        }
    });
    slitheringBestiary.forEach((slitheringMonster) => {
        if ( filter.length === 0 || filter.includes(slitheringMonster.data.details.level.value)) {
            rows.push(<li key={slitheringMonster._id} level={slitheringMonster.data.details.level.value}>{slitheringMonster.name + " " + slitheringMonster.data.details.level.value}</li>)
        }
    });
    troublesUnderOtariBestiary.forEach((troublesUnderOtariMonster) => {
        if ( filter.length === 0 || filter.includes(troublesUnderOtariMonster.data.details.level.value)) {
            rows.push(<li key={troublesUnderOtariMonster._id} level={troublesUnderOtariMonster.data.details.level.value}>{troublesUnderOtariMonster.name + " " + troublesUnderOtariMonster.data.details.level.value}</li>)
        }
    });

    rows.sort(compareMonsters);
    if (useLevelAsFilter){
        rows = rows.filter(row => Math.abs(level - row.props.level) <= 4);
    }

    return (
    <ul className="fullHeightScroll">
        {rows}
    </ul>);
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
