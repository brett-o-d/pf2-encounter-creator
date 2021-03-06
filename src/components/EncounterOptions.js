import { makeStyles } from '@material-ui/core/styles';

function EncounterOptions(props) {
    
    const partyLevel = props.partyLevel;
    const setPartyLevel = props.setPartyLevel;
    const partyCount = props.partyCount;
    const setPartyCount = props.setPartyCount;
    const setDifficulty = props.setDifficulty;
    const setUsePartyLevelAsFilter = props.setUsePartyLevelAsFilter;
    const setUseXPAsFilter = props.setUseXPAsFilter;

    const minPartyLevel = 0;
    const maxPartyLevel = 29;
    
    const minPartyCount = 0;
    const maxPartyCount = 8;

    const useStyles = makeStyles((theme) => ({
        optionsForm: {
            [theme.breakpoints.up('sm')]: {
                margin: '5px',
            },
            [theme.breakpoints.down('xs')]: {
                margin: '5px',
            },
        },
      }));

    const classes = useStyles();

    const partyLevelChanged = (event) => {
        const value = event.target.value;
        if (partyLevel !== value){
            if (value >= minPartyLevel && value <= maxPartyLevel){
                setPartyLevel(value);
            }
            else if (value < minPartyLevel) {
                setPartyLevel(minPartyLevel);
            }
            else if (value > maxPartyLevel){
                setPartyLevel(maxPartyLevel);
            }
        }
    }

    const partyCountChanged = (event) => {
        const value = event.target.value;
        console.log(value);
        if (partyCount !== value){
            if (value >= minPartyCount && value <= maxPartyCount){
                setPartyCount(value);
            }
            else if (value < minPartyCount) {
                setPartyCount(minPartyCount);
            }
            else if (value > maxPartyCount){
                setPartyCount(maxPartyCount);
            }
        }
    }

    const difficultyChanged = (event) => {
        if(event.target.value)
        {
            setDifficulty(event.target.id);
        }
    }

    const togglePartyLevelAsFilter = (event) => {
        setUsePartyLevelAsFilter(event.target.checked);
    }

    const toggleXPAsFilter = (event) => {
        setUseXPAsFilter(event.target.checked);
    }

    //Prevents form submission (and page refresh) when Enter Key is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className={classes.optionsForm} onSubmit={(event) => handleSubmit(event)}>
            <div className="center" id="partyLevel">
                <label htmlFor="partyLevel">Party Level</label>
                <input id="partyLevel" className="numberInput" value={partyLevel} onChange={(event) => partyLevelChanged(event)} type="number" min={minPartyLevel} max={maxPartyLevel}/>
                <label htmlFor="useAsLevelFilter">Use as Filter: (&#177;4 levels)</label>
                <input type="checkbox" id="useAsLevelFilter" defaultChecked="true"  onChange={(event) => togglePartyLevelAsFilter(event)}/>
            </div>
            <br/>
            <div className="center" id="partyCount">
                <label htmlFor="partyCount">Number of Characters</label>
                <input id="partyCount" className="numberInput" value={partyCount} onChange={(event) => partyCountChanged(event)} type="number" min={minPartyCount} max={maxPartyCount}/>
            </div>
            <br/>
            <div className="center" id="difficulty">
                <p>Difficulty</p>
                <input id="trivial" type="radio" name="difficulty" onChange={(event) => difficultyChanged(event)}/>
                <label htmlFor="trivial">Trivial</label>
                <input id="low" type="radio" name="difficulty" onChange={(event) => difficultyChanged(event)}/>
                <label htmlFor="low">Low</label>
                <input id="moderate" type="radio" name="difficulty" onChange={(event) => difficultyChanged(event)}/>
                <label htmlFor="moderate">Moderate</label>
                <input id="severe" type="radio" name="difficulty" onChange={(event) => difficultyChanged(event)}/>
                <label htmlFor="severe">Severe</label>
                <input id="extreme" type="radio" name="difficulty" onChange={(event) => difficultyChanged(event)}/>
                <label htmlFor="extreme">Extreme</label> <br/>
                <label htmlFor="useAsXPFilter">Use remaining XP as Filter: </label>
                <input type="checkbox" id="useAsXPFilter"  onChange={(event) => toggleXPAsFilter(event)}/> 
            </div>
        </form>
    )
}

export default EncounterOptions