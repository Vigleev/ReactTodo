import ActionButton from '../UI/ActionButton'
import {useState} from 'react'
import classes from './Components.module.css'
const Item = (props) => {
    const [editing,setEditing] = useState(false);
    const [text,setText] = useState(props.task.text);
    
    function saveEdit(text) {
        props.editTask(text);
        setEditing(false);
    }

    function cancelEdit(){
        setText(props.task.text);
        setEditing(false);
    }

    return (
        
        <li className={`${classes.item}`}>
        {editing ? 
        <>
            <input 
            value={text}
            onChange={e => setText(e.target.value)}
            ></input>
            <div>
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
            <input  type="checkbox" 
                    checked={props.task.completed}
                    onChange={props.switchCompleted}
            ></input>

            <p>{props.task.text}</p>

            <div className={`${classes.buttons}`}>
            <ActionButton
                    action = {()=>{setEditing("true")}}
                    text = {'edit'}
            />

            <ActionButton
                    action = {props.deleteTask}
                    text = {'delete'}
                    
            />
            </div>
        </>
        
    }
        </li>
        
    );
}

export default Item