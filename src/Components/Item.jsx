import EditButton from '../UI/EditButton'
import DeleteButton from '../UI/DeleteButton'
const Item = (props) => {
    return (
        <>
        <li>
            <input  type="checkbox" 
                    checked={props.task.completed}
                    onChange={props.switchCompleted}
            ></input>

            <p>{props.task.text}</p>

            <EditButton
                    task = {props.task}
            />

            <DeleteButton
                    deleteTask = {props.deleteTask}
                    
            />
        </li>
        </>
    );
}

export default Item