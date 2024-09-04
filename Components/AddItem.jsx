import { useState } from 'react'
import ActionButton from '../UI/ActionButton'
const AddItem = (props) => {
    const [text,setText] =useState('');
    function HandleClick(){
        props.addTask(text);
        console.log('added');
    }
    return (
        <>
        <div>
            <input value={text}
            onChange={e => setText(e.target.value)} 
            ></input>
            <ActionButton
            action = {()=>HandleClick()}
            />
        </div>
        </>
    );
}

export default AddItem