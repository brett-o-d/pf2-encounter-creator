function EncounterOptions(props) {
    
    const partyLevel = props.partyLevel;
    const setPartyLevel = props.setPartyLevel;
    const setDifficulty = props.setDifficulty;
    const setUsePartyLevelAsFilter = props.setUsePartyLevelAsFilter;
    const setUseXPAsFilter = props.setUseXPAsFilter;

    const minPartyLevel = 0;
    const maxPartyLevel = 29;

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
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="center" id="partyLevel">
                <label htmlFor="partyLevel">Party Level</label>
                <input id="partyLevel" value={partyLevel} onChange={(event) => partyLevelChanged(event)} type="number" min={minPartyLevel} max={maxPartyLevel}/>
                <label htmlFor="useAsFilter">Use as Filter: (&#177;4 levels)</label>
                <input type="checkbox" id="useAsFilter"  onChange={(event) => togglePartyLevelAsFilter(event)}/>
            </div>
            <br/>
            <div id="difficulty">
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
                <label htmlFor="useAsFilter">Use remaining XP as Filter: </label>
                <input type="checkbox" id="useAsFilter"  onChange={(event) => toggleXPAsFilter(event)}/> 
            </div>
        </form>
    )
}

export default EncounterOptions