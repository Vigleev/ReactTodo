import { useState } from 'react'
import AddButton from '../UI/AddButton'
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
            <AddButton
            HandleClick = {()=>HandleClick}
            />
        </div>
        </>
    );
}

export default AddItem