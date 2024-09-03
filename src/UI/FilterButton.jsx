import FilterTypes from '../Types/FilterType'
const FilterButton = (props) => {
    function handleClick(){
        props.onClick(props.type);
    }
    return (
        <>
        <button onClick={handleClick}></button>
        </>
    );
}

export default FilterButton