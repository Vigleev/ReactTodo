const EditButton = (task) => {
    function handleClick(){
        props.editTask();
        console.log('click');
    }
    return (
        <>
            <button onClick={handleClick}></button>
        </>
    );
}

export default EditButton