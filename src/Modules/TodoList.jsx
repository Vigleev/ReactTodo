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

    return (
        <>
        <AddItem/>
        <FilterByProgress/>
        <ul>
            {tasks.map(task => 
                (
                    <Item 
                        key = {task.id} 
                        task = {task}
                    />
                )
            )
            }
        </ul    >
        </>
    );
}

export default TodoList