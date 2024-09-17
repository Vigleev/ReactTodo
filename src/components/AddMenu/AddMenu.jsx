import {useState} from 'react'
import ActionButton from '../../ui/ActionButton'
import styles from './AddMenu.module.css'
import { useAddTodo } from "../../hooks/hooks.js";
const AddMenu = () => {
    const { mutate:addTodo } = useAddTodo();
    const [text,setText] = useState('');
    
    function HandleClick(){
        const newTodo = {
            isdone:false,
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
            action = {()=>HandleClick()}
            text = {'Add'}
            />
        </div>
        </>
    );
}
export default AddMenu