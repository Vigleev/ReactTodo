import FilterButton from "../UI/FilterButton"
import FilterTypes from '../Types/FilterType'


const FilterByProgress = (props) => {

    return (
        <>
        <div>
            <FilterButton
            onClick = {props.setFilterType}
            type = {FilterTypes.ALL}/>
            <FilterButton
            onClick = {props.setFilterType}
            type = {FilterTypes.DONE}/>
            <FilterButton
            onClick = {props.setFilterType}
            type = {FilterTypes.TODO}/>
        </div>
        </>
    );
}

export default FilterByProgress