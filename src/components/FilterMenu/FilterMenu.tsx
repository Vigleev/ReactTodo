import React from 'react'
import {useState} from 'react'
import ActionButton from '../../ui/ActionButton.jsx'
import styles from './FilterMenu.module.css'
import FilterTypes from '../../types/FilterTypes.ts'
const FilterMenu = (props:{
                            action:Function,
                            info:{
                                    all:number, 
                                    completed:number, 
                                    inWork:number}
                            }) => {
    const selectFilter = (filter: keyof typeof FilterTypes) => {

        props.action(filter);
    }
    return (<>
    <div className={`${styles.filterMenu}`}>
            <ActionButton
            action = {()=>selectFilter("ALL")}
            text = {'All ('+props.info.all+')'}
            />
            <ActionButton
            action = {()=>selectFilter("DONE")}
            text = {'Done ('+props.info.completed+')'}
            />
            <ActionButton
            action = {()=>selectFilter("TODO")}
            text = {'To do ('+props.info.inWork+')'}
            />
        </div>
    </>)
}
export default FilterMenu