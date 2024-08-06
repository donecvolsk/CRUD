
export function NoteList({arr, delClick}) {
    const delClickHandler = (e) => {  
        delClick(e.target.dataset.id);
    }

    return(
        <div className="noteListContainer">
            {arr.notes.map((el, idx=Math.random()) =>
                 <div className="noteListItem" key={idx}>
                    <p>{el.content}</p>                                    
                <button className="deleteBtn" type="button" data-id={el.id} onClick={delClickHandler}>X</button>
                </div>
            )}                
        </div>
    )
}