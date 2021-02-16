import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../global.css';

function Filters(props) {

    const levelFilter = props.levelFilter;
    const setLevelFilter = props.setLevelFilter;
    const typeFilter = props.typeFilter;
    const setTypeFilter = props.setTypeFilter;

    const MonsterTypes = ["Aberration", "Animal", "Astral", "Beast", "Celestial", "Construct", "Dragon",
                          "Dream", "Elemental", "Ethereal", "Fey", "Fiend", "Fungus", "Giant", "Humanoid", 
                          "Monitor", "Negative", "Ooze", "Petitioner", "Plant", "Positive", "Spirit", "Time", "Undead"]

    const alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", 
                        "Lawful Neutral", "Neutral", "Chaotic Neutral", 
                        "Lawful Evil", "Neutral Evil", "Chaotic Evil"]

    const handleLevelFilterChanged = (event) => {
        if (event.target.checked){
            const newFilter = levelFilter.concat(event.target.value);
            setLevelFilter(newFilter);
        }
        else {
            const newFilter = levelFilter.filter(filters => filters !== event.target.value);    
            setLevelFilter(newFilter);
        }
    }

    const handleTypeFilterChanged = (event) => {
        if (event.target.checked){
            console.log(event.target.value);
            const newFilter = typeFilter.concat(event.target.value);
            setTypeFilter(newFilter);
        }
        else {
            const newFilter = typeFilter.filter(filters => filters !== event.target.value);    
            setTypeFilter(newFilter);
        }
    }
    
    //Prevents form submission when Enter Key is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const monsterLevelFilterList = new Array(26);
    for (let index = -1; index <= 25; index++) {
        monsterLevelFilterList[index + 1] = (
            <div key={"div-level-filter-" + index}>
                <input type="checkbox" id={"level-filter-" + index} name="levelFilter" value={index} onChange={(event) => handleLevelFilterChanged(event)}/>
                <label htmlFor={"level-filter-" + index}>{index}</label> <br/>
            </div>
        )
    }

    const monsterTypeFilterList = new Array(24);
    var typeIndex = 0;
    MonsterTypes.forEach(type => {
        monsterTypeFilterList[typeIndex++] = (
            <div key={"div-type-filter-" + type}>
                <input type="checkbox" id={"type-filter-" + type} name="typeFilter" value={type} onChange={(event) => handleTypeFilterChanged(event)}/>
                <label htmlFor={"type-filter-" + type}>{type}</label> <br/>
            </div>
        )
    });

    return (
        <div className="filters">
            <p id="title">Filters</p><br id="br-title"/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Monster Level
                </AccordionSummary>
                <AccordionDetails>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        {monsterLevelFilterList}
                    </form>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Monster Type
                </AccordionSummary>
                <AccordionDetails>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        {monsterTypeFilterList}
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Filters;