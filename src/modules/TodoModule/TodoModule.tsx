import React from 'react'
import {useState} from 'react'
import { useTodos } from "../../hooks/hooks.js";
import FilterTypes from '../../types/FilterTypes.js'
import {FullTodoItem} from '../../types/TodoItem.ts'
import AddMenu from '../../components/AddMenu/index.jsx'
import FilterMenu from '../../components/FilterMenu/index.js'
import TodoList from '../../components/TodoList/index.jsx'
const TodoModule = () => {
    const [selectedFilter,setSelectedFilter] = useState(FilterTypes.ALL);
    const { data, isLoading, error } = useTodos(selectedFilter);
    const todos = data?.data; // Array of todos
    const info = data?.info;  // Info object with counts
    console.log(info);

 


    function handleFilterSelect (Filter: keyof typeof FilterTypes) {
        setSelectedFilter(FilterTypes[Filter]);
    }

    return (
        <>
        <AddMenu
            
        />


        {isLoading ? "loading todo list":
        <>
            <FilterMenu
                action={(filter:keyof typeof FilterTypes) => handleFilterSelect(filter)}
                info={info}
            />
            <TodoList
                tasks = {todos}
            /> 
        </>}

        </>
    );
}
export default TodoModule