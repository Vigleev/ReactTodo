import { useState } from 'react'
import ActionButton from '../UI/ActionButton'
import classes from './Components.module.css'
const AddItem = (props) => {
    const [text,setText] =useState('');
    function HandleClick(){
        props.addTask(text);
        console.log('added');
    }
    return (
        <>
        <div className= {`${classes.addItem}`}>
            <input value={text}
            onChange={e => setText(e.target.value)} 
            ></input>
            <ActionButton
            action = {()=>HandleClick()}
            text = {'add'}
            />
        </div>
        </>
    );
}

export default AddItem