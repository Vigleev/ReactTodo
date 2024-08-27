const DeleteButton = (props) => {
    function handleClick(){
        props.deleteTask();
        console.log('click');
    }
    return (
        <>
        <button onClick={handleClick}></button>
        </>
    );
}

export default DeleteButton