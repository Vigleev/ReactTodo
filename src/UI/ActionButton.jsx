const ActionButton = (props) => {
    function handleClick(){
        props.action();
    }
    return (
        <>
        <button onClick={handleClick}>{props.text}</button>
        </>
    );
}

export default ActionButton