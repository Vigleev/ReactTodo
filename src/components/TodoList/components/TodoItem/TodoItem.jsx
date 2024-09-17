import {useState} from 'react'
import ActionButton from '../../../../ui/ActionButton.jsx'
import { useUpdateTodo, useDeleteTodo } from "../../../../hooks/hooks.js";
import styles from './TodoItem.module.css'


const Item = (props) => {
    const [editing,setEditing] = useState(false);
    const [text,setText] = useState(props.todo.title);
    
    const { mutate:updateTodo } = useUpdateTodo(props.todo.id);
    const { mutate:deleteTodo } = useDeleteTodo();

    function saveEdit(text) {
        const newTodo = {
            isDone: props.todo.isDone,
            title: text
        }
        updateTodo(newTodo);
        setEditing(false);
    }

    function cancelEdit() {
        setText(props.todo.title);
        setEditing(false);
    }

    function switchCompleted() {
        const newTodo = {
            isDone:!props.todo.isDone,
            title: props.todo.title
        }
        updateTodo(newTodo);
    }

    function deleteTask(){
        deleteTodo(props.todo.id);
    }
    return (
        <li className = {`${styles.TodoContainer}`}>
        {editing ? 
        <>
            <input className = {`${styles.EditField}`}
            value={text}
            onChange={e => setText(e.target.value)}
            ></input>
            <div className = {`${styles.ButtonContainer}`}>
            <ActionButton
            action={()=>saveEdit(text)}
            text ={'save'}
            />
            <ActionButton
            action={()=>cancelEdit()}
            text ={'cancel'}
            />
            </div>
        </>: 
        <>
            <input  
                type="checkbox" 
                checked={props.todo.isDone}
                onChange={switchCompleted}
            ></input>
            <p>{text}</p>
            <div className = {`${styles.ButtonContainer}`}>
            <ActionButton
                    action = {()=>{setEditing("true")}}
                    text = {'edit'}
            />
            <ActionButton
                    action = {deleteTask}
                    text = {'delete'}         
            />
            </div>
        </>  
    }
        </li> 
    );
}

export default Item