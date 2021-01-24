function EncounterOptions(props) {
    
    const level = props.level;
    const setLevel = props.setLevel;
    const useLevelAsFilter = props.useLevelAsFilter;
    const setUseLevelAsFilter = props.setUseLevelAsFilter;

    const minLevel = 0;
    const maxLevel = 29;

    const levelChanged = (event) => {
        const value = event.target.value;
        if (level !== value){
            if (value >= minLevel && value <= maxLevel){
                setLevel(value);
            }
            else if (value < minLevel) {
                setLevel(minLevel);
            }
            else if (value > maxLevel){
                setLevel(maxLevel);
            }
        }
    }

    const toggleLevelAsFilter = (event) => {
        setUseLevelAsFilter(event.target.checked);
    }

    //Prevents form submission when Enter Key is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="center" id="level">
                <label htmlFor="level">Party Level</label>
                <input id="level" value={level} onChange={(event) => levelChanged(event)} type="number" min={minLevel} max={maxLevel}/>
                <label htmlFor="useAsFilter">Use as Filter:</label>
                <input type="checkbox" id="useAsFilter" value={useLevelAsFilter} onChange={(event) => toggleLevelAsFilter(event)}/>
            </div>
            <br/>
            <div id="difficulty">
                <p>Difficulty</p>
                <input id="trivial" type="radio" name="difficulty"/>
                <label htmlFor="trivial">Trivial</label>
                <input id="low" type="radio" name="difficulty"/>
                <label htmlFor="low">Low</label>
                <input id="moderate" type="radio" name="difficulty"/>
                <label htmlFor="moderate">Moderate</label>
                <input id="severe" type="radio" name="difficulty"/>
                <label htmlFor="severe">Severe</label>
                <input id="extreme" type="radio" name="difficulty"/>
                <label htmlFor="extreme">Extreme</label>
            </div>
        </form>
    )
}

export default EncounterOptions