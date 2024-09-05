import FilterTypes from '../Types/FilterType'
import ActionButton from '../UI/ActionButton'
import classes from './Components.module.css'

const FilterByProgress = (props) => {

    return (
        <>
        <div className={`${classes.filter}`}>
            <ActionButton
            action = {()=>props.setFilterType(FilterTypes.ALL)}
            text = {'All'}
            />
            <ActionButton
            action = {()=>props.setFilterType(FilterTypes.DONE)}
            text = {'Done'}
            />
            <ActionButton
            action = {()=>props.setFilterType(FilterTypes.TODO)}
            text = {'To do'}
            />
        </div>
        </>
    );
}

export default FilterByProgress