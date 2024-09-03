import Item from '../Components/Item'
import AddItem from '../Components/AddItem'
import FilterByProgress from '../Components/FilterByProgress'
import { useState } from 'react'
import { useEffect } from 'react'
import FilterTypes from '../Types/FilterType'

const TodoList = () => {
    const [tasks, setTasks] = useState([
        {
        id: 1,
        text: 'Test task 1',
        completed: true
        },
        {
        id: 2,
        text: 'Test task 2',
        completed: false
        }
        ]);


        const [filterType, setFilterType] = useState(FilterTypes.ALL)
        const filterTasks = (tasks, filterType) => {
            switch (filterType) {
                case "ALL":
                    return tasks;
                case "DONE":
                    return tasks.filter(task => task.completed);
                case "TODO":
                    return tasks.filter(task => !task.completed);
            }
        };

        const filteredTasks = filterTasks(tasks,filterType);

        function setFilter(Filter){
            console.log("setting filter");
            setFilterType(Filter);
        }

        function addTask(text) {
            const newTask = {
                
                id : tasks.length==0? 1: tasks[tasks.length-1].id+1,
                text,
                completed : false,
            };
            setTasks([...tasks, newTask]);
        }

        
        
        function deleteTask(id) {
            console.log('deleted');
            setTasks(tasks.filter(task => task.id !== id));
            
            }

        function switchCompleted(id) {
            setTasks(tasks.map(task => {
                if (task.id === id){
                    return {...task, completed : !task.completed};
                }
                else {
                    return task;
                }
            }))
            console.log('switched');
        }
    return (
        <>
        <AddItem
        addTask = {addTask}
        />
        <FilterByProgress
            setFilterType = {(Filter) => setFilter(Filter)}
        />
        <ul>
            {filteredTasks.map(task => 
                (
                    <Item 
                        key = {task.id} 
                        task = {task}
                        deleteTask = {() => deleteTask(task.id)}
                        switchCompleted = {() => switchCompleted(task.id)}
                    />  
                )
            )
            }
        </ul    >
        </>
    );
}

export default TodoList