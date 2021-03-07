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
    const alignmentFilter = props.alignmentFilter;
    const setAlignmentFilter = props.setAlignmentFilter;
    const sizeFilter = props.sizeFilter;
    const traitFilter = props.traitFilter;
    const setSizeFilter = props.setSizeFilter;
    const setTraitFilter = props.setTraitFilter;
    const device = props.device;

    const MonsterTypes = ["Aberration", "Animal", "Astral", "Beast", "Celestial", "Construct", "Dragon",
                          "Dream", "Elemental", "Ethereal", "Fey", "Fiend", "Fungus", "Giant", "Humanoid", 
                          "Monitor", "Negative", "Ooze", "Petitioner", "Plant", "Positive", "Spirit", "Time", "Undead"];

    const alignments = ["LG", "NG", "CG", 
                        "LN", "N", "CN", 
                        "LE", "NE", "CE"];

    const sizes = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];
    const sizeConverter = {"Tiny":"tiny", "Small":"sm", "Medium":"med", "Large":"lg", "Huge":"huge", "Gargantuan":"grg"};

    const traits = ["Aasimar", "Acid", "Aeon", "Air", "Alchemical", "Amphibious", "Anadi", "Angel", "Aphorite", "Aquatic", "Archon", 
        "Azata", "Beastkin", "Boggard", "Caligni", "Catfolk", "Changeling", "Charau-ka", "Clockwork", "Cold", "Couatl", "Daemon", 
        "Demon", "Dero", "Devil", "Dhampir", "Dinosaur", "Drow", "Duergar", "Duskwalker", "Dwarf", "Earth", "Electricity", "Elf",
        "Evil", "Fetchling", "Fire", "Genie", "Ghost", "Ghoul", "Gnoll", "Gnome", "Goblin", "Golem", "Gremlin", "Grippli", "Hag", 
        "Herald", "Human", "Ifrit", "Incorporeal", "Inevitable", "Kobold", "Leshy", "Lizardfolk", "Merfolk", "Mindless", "Morlock", 
        "Mummy", "Mutant", "Nymph", "Oni", "Orc", "Oread", "Protean", "Psychopomp", "Qlippoth", "Rakshasa", "Ratfolk", "Sahkil", 
        "Sea Devil", "Serpentfolk", "Seugathi", "Shadow", "Shoony", "Skeleton", "Skulk", "Soulbound", "Spriggan", "Sprite", "Suli",
        "Swarm", "Sylph", "Tane", "Tengu", "Tiefling", "Titan", "Troll", "Undine", "Urdefhan", "Vampire", "Velstrac", "Water", 
        "Werecreature", "Wight", "Wraith", "Xulgath", "Zombie"];
    

    const handleLevelFilterChanged = (event) => {
        if (event.target.checked){
            console.log(event.target.value);
            const newFilter = levelFilter.concat(event.target.value);
            setLevelFilter(newFilter);
        }
        else {
            console.log(event.target.value);
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
            console.log(event.target.value);
            const newFilter = typeFilter.filter(filters => filters !== event.target.value);    
            setTypeFilter(newFilter);
        }
    }

    const handleAlignmentFilterChanged = (event) => {
        if (event.target.checked){
            console.log(event.target.value);
            const newFilter = alignmentFilter.concat(event.target.value);
            setAlignmentFilter(newFilter);
        }
        else {
            console.log(event.target.value);
            const newFilter = alignmentFilter.filter(filters => filters !== event.target.value);    
            setAlignmentFilter(newFilter);
        }
    }

    const handleSizeFilterChanged = (event) => {
        if (event.target.checked){
            console.log(event.target.value);
            const newFilter = sizeFilter.concat(sizeConverter[event.target.value]);
            setSizeFilter(newFilter);
        }
        else {
            console.log(event.target.value);
            const newFilter = sizeFilter.filter(filters => filters !== sizeConverter[event.target.value]);    
            setSizeFilter(newFilter);
        }
    }

    const handleTraitFilterChanged = (event) => {
        if (event.target.checked){
            console.log(event.target.value);
            const newFilter = traitFilter.concat(event.target.value);
            setTraitFilter(newFilter);
        }
        else {
            console.log(event.target.value);
            const newFilter = traitFilter.filter(filters => filters !== event.target.value);    
            setTraitFilter(newFilter);
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
                <input type="checkbox" id={device + "-level-filter-" + index} name="levelFilter" 
                    value={index} onChange={(event) => handleLevelFilterChanged(event)}/>
                <label htmlFor={device + "-level-filter-" + index}>{index}</label> <br/>
            </div>
        )
    }

    const monsterTypeFilterList = new Array(24);
    var typeIndex = 0;
    MonsterTypes.forEach(type => {
        monsterTypeFilterList[typeIndex++] = (
            <div key={"div-type-filter-" + type}>
                <input type="checkbox" id={device + "-type-filter-" + type} name="typeFilter" 
                    value={type} onChange={(event) => handleTypeFilterChanged(event)}/>
                <label htmlFor={device + "-type-filter-" + type}>{type}</label> <br/>
            </div>
        )
    });

    const alignmentFilterList = new Array(9);
    var alignmentIndex = 0;
    alignments.forEach(alignment => {
        alignmentFilterList[alignmentIndex++] = (
            <div key={"div-alignment-filter-" + alignment}>
                <input type="checkbox" id={device + "-alignment-filter-" + alignment} name="alignmentFilter"
                    value={alignment} onChange={(event) => handleAlignmentFilterChanged(event)}/>
                <label htmlFor={device + "-alignment-filter-" + alignment}>{alignment}</label> <br/>
            </div>
        )
    });

    const sizeFilterList = new Array(9);
    var sizeIndex = 0;
    sizes.forEach(size => {
        sizeFilterList[sizeIndex++] = (
            <div key={"div-size-filter-" + size}>
                <input type="checkbox" id={device + "-size-filter-" + size} name="sizeFilter"
                    value={size} onChange={(event) => handleSizeFilterChanged(event)}/>
                <label htmlFor={device + "-size-filter-" + size}>{size}</label> <br/>
            </div>
        )
    });

    const traitFilterList = new Array(9);
    var traitIndex = 0;
    traits.forEach(trait => {
        traitFilterList[traitIndex++] = (
            <div key={"div-trait-filter-" + trait}>
                <input type="checkbox" id={device + "-trait-filter-" + trait} name="traitFilter"
                    value={trait} onChange={(event) => handleTraitFilterChanged(event)}/>
                <label htmlFor={device + "-trait-filter-" + trait}>{trait}</label> <br/>
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
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Alignment
                </AccordionSummary>
                <AccordionDetails>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        {alignmentFilterList}
                    </form>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Size
                </AccordionSummary>
                <AccordionDetails>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        {sizeFilterList}
                    </form>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Trait
                </AccordionSummary>
                <AccordionDetails>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        {traitFilterList}
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Filters;