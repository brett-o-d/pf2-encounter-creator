function Filters(props) {

    const filter = props.filter;
    const setFilter = props.setFilter;

    const handleFilterChanged = (event) => {
        if (event.target.checked){
            const newFilter = filter.concat(event.target.value);
            setFilter(newFilter);
        }
        else {
            const newFilter = filter.filter(filters => filters !== event.target.value);    
            setFilter(newFilter);
        }
    }
    
    //Prevents form submission when Enter Key is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const checkboxes = new Array(26);
    for (let index = -1; index <= 25; index++) {
        checkboxes[index + 1] = (
            <div key={"div-filter" + index}>
                <input type="checkbox" id={"input-filter" + index} name="levelFilter" value={index} onChange={(event) => handleFilterChanged(event)}/>
                <label htmlFor={"input-filter" + index}>{index}</label> <br/>
            </div>
        )
        
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <div id="filters">
                <p id="title">Filters</p><br id="br-title"/>
                {checkboxes}
            </div>
                
        </form>
    )
}

export default Filters;