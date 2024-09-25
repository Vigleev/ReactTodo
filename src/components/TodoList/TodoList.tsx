import React from 'react'
import TodoItemComponent from './components/TodoItem'
import {FullTodoItem} from '../../types/TodoItem'
import styles from './TodoList.module.css'
const TodoList = ( props:{tasks:Array<FullTodoItem>}) => {
    const todoSorted = props.tasks.sort((a,b) => {
        return  new Date(a.created).valueOf() - new Date(b.created).valueOf();
    })
    return (
    <ul className = {`${styles.TodoList}`}>
    {    todoSorted.map((todo) => (
        <TodoItemComponent
            key = {todo.id}
            todo={todo}
        />
    ))}
    </ul>)
}
export default TodoList