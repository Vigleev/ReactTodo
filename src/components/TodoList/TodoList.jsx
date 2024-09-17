import TodoItem from './components/TodoItem'
import styles from './TodoList.module.css'
const TodoList = (props) => {
    const todoSorted = props.tasks.sort((a,b) => {
        return  new Date(a.created) - new Date(b.created);
    })
    return (
    <ul className = {`${styles.TodoList}`}>
    {    todoSorted.map((todo) => (
        <TodoItem
            key = {todo.id}
            todo={todo}
        />
    ))}
    </ul>)
}
export default TodoList