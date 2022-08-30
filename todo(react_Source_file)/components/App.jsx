import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./body";

import FormArea from "./formarea";
import { useState } from "react";

function App(){
    const [notes , setNote] = useState([]);

    function addNote(newNotes){
         setNote(prevNote => {
            return [...prevNote , newNotes];
         })
    }
    function deleteNote(id){
       setNote(prevNote => {
        return prevNote.filter((noteItem, index) =>{
            return index !== id;
        });
       });
    }
    
    return (<div>
        <Header/>
        <FormArea onAdd={addNote}/>
        {notes.map((noteItem, index) =>{
            return <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content} 
            onDelete= {deleteNote}
            />
        })}
        <Footer/>
    </div>)
}
export default App;
//  notes?.map((noteItem , index)=>{
//     return (<Note
//         key={index} id={index}
//         title={noteItem.title} content={noteItem.content}
//         onDelete={deleteNote} 
//          />);})