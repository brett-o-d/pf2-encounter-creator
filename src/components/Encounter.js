import { MonsterXP } from './Constants';

function Encounter(props) {
    const partyLevel = props.partyLevel;
    const remainingXP = props.remainingXP;
    const encounterList = props.encounterList;

    const RemoveFromEncounter = (event, monster) => {

    }

    var rows = [];
    encounterList.forEach((monster) => {
        console.log(monster.name);
        const monsterLevel = monster.data.details.level.value;
        const monsterXP = MonsterXP[monsterLevel - partyLevel];
        rows.push(<li key={monster._id}>
            Name: {monster.name} 
            <button onClick={(event) => RemoveFromEncounter(event, monster)} style={{float:'right'}}>Remove from Encounter</button> <br/> 
            Level: {monsterLevel} XP: {monsterXP}</li>);
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
