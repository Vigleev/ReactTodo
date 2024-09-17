import {useState} from 'react'
import ActionButton from '../../ui/ActionButton'
import styles from './FilterMenu.module.css'
import FilterTypes from '../../types/FilterTypes.js'
const FilterMenu = (props) => {
    const HandleClick = (FilterTypes) => {
        props.action(FilterTypes);
    }
    return (<>
    <div className={`${styles.filterMenu}`}>
            <ActionButton
            action = {()=>HandleClick(FilterTypes.ALL)}
            text = {'All ('+props.info.all+')'}
            />
            <ActionButton
            action = {()=>HandleClick(FilterTypes.DONE)}
            text = {'Done ('+props.info.completed+')'}
            />
            <ActionButton
            action = {()=>HandleClick(FilterTypes.TODO)}
            text = {'To do ('+props.info.inWork+')'}
            />
        </div>
    </>)
}
export default FilterMenu