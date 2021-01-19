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
    ashesBestiary.forEach((ashesMonster) => {rows.push(<li>{ashesMonster.name}</li>)})
    edgewatchBestiary.forEach((edgewatchMonster) => {rows.push(<li>{edgewatchMonster.name}</li>)})
    extinctionCurseBestiary.forEach((extinctionCurseMonster) => {rows.push(<li>{extinctionCurseMonster.name}</li>)})
    plaguestoneBestiary.forEach((plaguestoneMonster) => {rows.push(<li>{plaguestoneMonster.name}</li>)})
    menaceUnderOtariBestiary.forEach((menaceUnderOtariMonster) => {rows.push(<li>{menaceUnderOtariMonster.name}</li>)})
    pathfinderBestiary.forEach((pathfinderMonster) => {rows.push(<li>{pathfinderMonster.name}</li>)})
    pathfinderBestiary2.forEach((pathfinderMonster2) => {rows.push(<li>{pathfinderMonster2.name}</li>)})
    season1Bestiary.forEach((season1Monster) => {rows.push(<li>{season1Monster.name}</li>)})
    season2Bestiary.forEach((season2Monster) => {rows.push(<li>{season2Monster.name}</li>)})    
    slitheringBestiary.forEach((slitheringMonster) => {rows.push(<li>{slitheringMonster.name}</li>)})
    troublesUnderOtariBestiary.forEach((troublesUnderOtariMonster) => {rows.push(<li>{troublesUnderOtariMonster.name}</li>)})
    return <ul>
        <li>{rows}</li>
    </ul>;
}

export default MonsterList;