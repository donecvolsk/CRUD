import { useState, useEffect, useRef } from 'react';
import './App.css';
import { UpdateBlock } from "./Components/UpdateBlock";
import { NoteList } from "./Components/NoteList";
import { NoteForm } from "./Components/NoteForm";
const URL = 'http://localhost:7070/notes';

function App() {
  let [notes, setNotes] = useState({notes: []});
  
  const get = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data =>
      setNotes(prevState => ({ ...prevState, notes: data }))
          )
  }
  
  const post = (textValue) => {
    fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(textValue),
        }).then(res => {
        if (res.status === 204) {
          get();   
        }
      });
  }

  const del = (id) => {
    fetch(URL + `/${id}`, {
      method: 'DELETE'
    }).then(res => {
      if(res.status === 204) {
        get();
      }
    }) 
  }
 
  //загрузка карточек при старте 
  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      get();
    }
  }, []);

  return (
  <div className='appContainer'>
    <UpdateBlock fn={get} />
    <NoteList arr={notes} delClick={del} />
    <NoteForm onSubmit={post} />
  </div>
  )
}

export default App
