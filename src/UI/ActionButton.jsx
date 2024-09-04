const ActionButton = (props) => {
    function handleClick(){
        props.action();
    }
    return (
        <>
        <button onClick={handleClick}></button>
        </>
    );
}

export default ActionButton