import { useRef } from "react";


export function NoteForm({onSubmit}) {
    const textareaRef = useRef();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        onSubmit({
            content: textareaRef.current?.value,
        })
        textareaRef.current.value = '';
    }

    return (
        <form className="noteForm" onSubmit={onSubmitHandler} >
            <label>New Note</label>
            <textarea className="noteInput" ref={textareaRef} required />
            <button type="submit" className="submitBtn">►</button>
        </form>
    )
}