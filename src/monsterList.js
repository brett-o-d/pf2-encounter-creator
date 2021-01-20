import React from 'react';
import ashesBestiary from './bestiaries/age-of-ashes-bestiary.json'
import edgewatchBestiary from './bestiaries/agents-of-edgewatch-bestiary.json'
import extinctionCurseBestiary from './bestiaries/extinction-curse-bestiary.json'
import plaguestoneBestiary from './bestiaries/fall-of-plaguestone.json'
import menaceUnderOtariBestiary from './bestiaries/menace-under-otari-bestiary.json'
import pathfinderBestiary from './bestiaries/pathfinder-bestiary.json'
import pathfinderBestiary2 from './bestiaries/pathfinder-bestiary-2.json'
import season1Bestiary from './bestiaries/pfs-season-1-bestiary.json'
import season2Bestiary from './bestiaries/pfs-season-2-bestiary.json'
import slitheringBestiary from './bestiaries/the-slithering-bestiary.json'
import troublesUnderOtariBestiary from './bestiaries/troubles-in-otari-bestiary.json';


function MonsterList(){
    const rows = [];
    ashesBestiary.forEach((ashesMonster) => {
        rows.push(<li key={ashesMonster._id}>{ashesMonster.name + " " + ashesMonster.data.details.level.value}</li>)});
    edgewatchBestiary.forEach((edgewatchMonster) => {
        rows.push(<li key={edgewatchMonster._id}>{edgewatchMonster.name + " " + edgewatchMonster.data.details.level.value}</li>)});
    extinctionCurseBestiary.forEach((extinctionCurseMonster) => {
        rows.push(<li key={extinctionCurseMonster._id}>{extinctionCurseMonster.name + " " + extinctionCurseMonster.data.details.level.value}</li>)});
    plaguestoneBestiary.forEach((plaguestoneMonster) => {
        rows.push(<li key={plaguestoneMonster._id}>{plaguestoneMonster.name + " " + plaguestoneMonster.data.details.level.value}</li>)});
    menaceUnderOtariBestiary.forEach((menaceUnderOtariMonster) => {
        rows.push(<li key={menaceUnderOtariMonster._id}>{menaceUnderOtariMonster.name + " " + menaceUnderOtariMonster.data.details.level.value}</li>)});
    pathfinderBestiary.forEach((pathfinderMonster) => {
        rows.push(<li key={pathfinderMonster._id}>{pathfinderMonster.name + " " + pathfinderMonster.data.details.level.value}</li>)});
    pathfinderBestiary2.forEach((pathfinderMonster2) => {
        rows.push(<li key={pathfinderMonster2._id}>{pathfinderMonster2.name + " " + pathfinderMonster2.data.details.level.value}</li>)});
    season1Bestiary.forEach((season1Monster) => {
        rows.push(<li key={season1Monster._id}>{season1Monster.name + " " + season1Monster.data.details.level.value}</li>)});
    season2Bestiary.forEach((season2Monster) => {
        rows.push(<li key={season2Monster._id}>{season2Monster.name + " " + season2Monster.data.details.level.value}</li>)});
    slitheringBestiary.forEach((slitheringMonster) => {
        rows.push(<li key={slitheringMonster._id}>{slitheringMonster.name + " " + slitheringMonster.data.details.level.value}</li>)});
    troublesUnderOtariBestiary.forEach((troublesUnderOtariMonster) => {
        rows.push(<li key={troublesUnderOtariMonster._id}>{troublesUnderOtariMonster.name + " " + troublesUnderOtariMonster.data.details.level.value}</li>)});
    return (
    <ul style={{height:'92vh', overflowY: 'scroll'}}>
        {rows}
    </ul>);
}

export default MonsterList;