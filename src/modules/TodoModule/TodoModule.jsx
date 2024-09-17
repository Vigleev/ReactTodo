import {useState} from 'react'
import { useTodos } from "../../hooks/hooks.js";
import FilterTypes from '../../types/FilterTypes.js'
import AddMenu from '../../components/AddMenu'
import FilterMenu from '../../components/FilterMenu'
import TodoList from '../../components/TodoList'
const TodoModule = () => {
    const { data, isLoading, error } = useTodos();
    const todos = data?.data; // Array of todos
    const info = data?.info;  // Info object with counts
    console.log(info);

    const [selectedFilter,setSelectedFilter] = useState(FilterTypes.ALL);
    const filterTasks = (todos, selectedFilter) => {
        switch (selectedFilter) {
            case "ALL":
                return todos;
            case "DONE":
                return todos.filter(task => task.isDone);
            case "TODO":
                return todos.filter(task => !task.isDone);
        }
    }
    const filteredTasks = filterTasks(todos, selectedFilter);

    function handleFilterSelect (FilterType) {
        setSelectedFilter(FilterType);
    }

    return (
        <>
        <AddMenu
            
        />


        {isLoading ? "loading todo list":
        <>
            <FilterMenu
                action={(FilterType) => handleFilterSelect(FilterType)}
                info={info}
            />
            <TodoList
                tasks = {filteredTasks}
            /> 
        </>}

        </>
    );
}
export default TodoModule