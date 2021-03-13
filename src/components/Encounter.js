import { MonsterXP } from './Constants';
import { makeStyles } from '@material-ui/core/styles';

function Encounter(props) {
    const partyLevel = props.partyLevel;
    const remainingXP = props.remainingXP;
    const encounterList = props.encounterList;
    const RemoveFromEncounterList = props.RemoveFromEncounterList;

    const useStyles = makeStyles((theme) => ({
        encounterDiv: {
            [theme.breakpoints.up('sm')]: {
                margin: '5px',
            },
            [theme.breakpoints.down('xs')]: {
                margin: '5px',
            },
        },
      }));

    const classes = useStyles();

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
            <a href={monster.data.details.nethysUrl} target="_blank"  style={{float:'right'}}>Nethys</a></li>);
    });

    return (
        <div className={classes.encounterDiv}><p>Remaining XP: {remainingXP}</p>
            <ul>
                {rows}
            </ul>
        </div>
    )
}

export default Encounter;
