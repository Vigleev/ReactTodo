import Item from '../Components/Item'
import AddItem from '../Components/AddItem'
import FilterByProgress from '../Components/FilterByProgress'
import { useState } from 'react'

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

        function addTask(text) {
            const newTask = {
                id : tasks[tasks.length-1].id+1,
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
        <FilterByProgress/>
        <ul>
            {tasks.map(task => 
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