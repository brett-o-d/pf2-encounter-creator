import { MonsterXP } from './Constants';

function Encounter(props) {
    const partyLevel = props.partyLevel;
    const remainingXP = props.remainingXP;
    const encounterList = props.encounterList;
    const RemoveFromEncounterList = props.RemoveFromEncounterList;

    const RemoveFromEncounter = (event) => {
        RemoveFromEncounterList(event.target.id);
    }

    var rows = [];
    var id = 0;
    encounterList.forEach((monster) => {
        const monsterLevel = monster.data.details.level.value;
        const monsterXP = MonsterXP[monsterLevel - partyLevel];
        rows.push(<li key={id}>
            Name: {monster.name} 
            <button id={id++} onClick={(event) => RemoveFromEncounter(event)} style={{float:'right'}}>Remove from Encounter</button> <br/> 
            Level: {monsterLevel} XP: {monsterXP}
            <a href={monster.data.details.nethysUrl} style={{float:'right'}}>Nethys</a></li>);
    });

    return (
        <div><p>Remaining XP: {remainingXP}</p>
            <ul>
                {rows}
            </ul>
        </div>
    )
}

export default Encounter;
