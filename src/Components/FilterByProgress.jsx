import FilterTypes from '../Types/FilterType'
import ActionButton from '../UI/ActionButton'

const FilterByProgress = (props) => {

    return (
        <>
        <div>
            <ActionButton
            action = {()=>props.setFilterType(FilterTypes.ALL)}
            />
            <ActionButton
            action = {()=>props.setFilterType(FilterTypes.DONE)}
            />
            <ActionButton
            action = {()=>props.setFilterType(FilterTypes.TODO)}
            />
        </div>
        </>
    );
}

export default FilterByProgress