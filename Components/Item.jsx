import ActionButton from '../UI/ActionButton'
import {useState} from 'react'
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
        <>
        <li>
        {editing ? 
        <>
            <input 
            value={text}
            onChange={e => setText(e.target.value)}
            ></input>
            <ActionButton
            action={()=>saveEdit(text)}/>
            <ActionButton
            action={()=>cancelEdit()}
            />
        </>: 
        <>
            <input  type="checkbox" 
                    checked={props.task.completed}
                    onChange={props.switchCompleted}
            ></input>

            <p>{props.task.text}</p>


            <ActionButton
                    action = {()=>{setEditing("true")}}
            />

            <ActionButton
                    action = {props.deleteTask}
                    
            />
        </>
        
    }
        </li>
        </>
    );
}

export default Item