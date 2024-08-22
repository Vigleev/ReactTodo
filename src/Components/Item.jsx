const Item = (props) => {
    return (
        <>
        <li>
            <input type="checkbox" checked={props.task.completed}></input>
            <p>{props.task.text}</p>
            <button>EDIT</button>
            <button>X</button>
        </li>
        </>
    );
}

export default Item