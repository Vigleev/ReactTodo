import React from 'react'
import {useState} from 'react'
import ActionButton from '../../ui/ActionButton.jsx'
import styles from './AddMenu.module.css'
import { useAddTodo } from "../../hooks/hooks.js";
import {FullTodoItem, NewTodoItem} from '../../types/TodoItem'

const AddMenu = () => {
    const { mutate:addTodo } = useAddTodo();
    const [text,setText] = useState('');
    
    function handleAddItem(){
        const newTodo:NewTodoItem = {
            isDone:false,
            title: text
        }
        console.log(newTodo);
        addTodo(newTodo);
        setText("");
    }
    return (
        <>
        <div className= {`${styles.addItem}`}>
            <input className = {`${styles.addField}`}
            value={text}
            onChange={e => setText(e.target.value)} 
            ></input>
            <ActionButton
            action = {()=>handleAddItem()}
            text = {'Add'}
            />
        </div>
        </>
    );
}
export default AddMenu