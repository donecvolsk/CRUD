

export function UpdateBlock ({fn}) {
    const onHandle = (event) =>{
        event.preventDefault();
        fn();
    }

    return (
        <div className="updateContayner">
            <h2>Notes</h2>
            <button className="updateBtn" type="button" onClick ={onHandle}></button>
        </div>
    )
}