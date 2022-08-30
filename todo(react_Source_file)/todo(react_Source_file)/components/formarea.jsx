import React from "react";
import { useState } from "react";

function FormArea(props) {
      const [ notes , setNote]= useState({
        title : "",
        content: ""
      });

      // THIS WILL SAVE THE ENTERED VALUE IN A CONSTANT MADE ABOVE
       function handleChange(event){
         const {name,value} = event.target;
        
         setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            };
         });
       }
      //  ENDED HERE
       function submitNote(event){
        event.preventDefault()
        props.onAdd(notes)
        setNote({
          title : "",
          content: ""
        })
        
        
       }
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={notes.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={notes.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default FormArea;