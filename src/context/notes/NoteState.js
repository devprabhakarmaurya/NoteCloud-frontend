import NoteContext from './noteContext';
import React, { useState } from 'react'

const NoteState = (props) => {
    let notesInitial = [
        {
            "_id": "1",
            "user": "6515451ba5c5b158adebdf09",
            "title": "My note",
            "description": "This is sample desciption",
            "tag": "Personal",
            "date": "2023-09-29T07:04:12.045Z",
            "__v": 0
        },
        {
            "_id": "2",
            "user": "3",
            "title": "My note",
            "description": "This is sample desciption",
            "tag": "Personal",
            "date": "2023-09-29T07:05:54.223Z",
            "__v": 0
        },
        {
            "_id": "4",
            "user": "6515451ba5c5b158adebdf09",
            "title": "My note",
            "description": "This is sample desciption",
            "tag": "Personal",
            "date": "2023-09-29T07:05:54.929Z",
            "__v": 0
        },
        {
            "_id": "5",
            "user": "6515451ba5c5b158adebdf09",
            "title": "My note",
            "description": "This is sample desciption",
            "tag": "Personal",
            "date": "2023-09-29T07:05:55.507Z",
            "__v": 0
        },
        {
            "_id": "6",
            "user": "6515451ba5c5b158adebdf09",
            "title": "My note",
            "description": "This is sample desciption546465",
            "tag": "Personal",
            "date": "2023-09-29T07:05:54.929Z",
            "__v": 0
        },
        {
            "_id": "7",
            "user": "6515451ba5c5b158adebdf09",
            "title": "My note",
            "description": "This is sample desciption12",
            "tag": "Personal",
            "date": "2023-09-29T07:05:55.507Z",
            "__v": 0
        },
        {
            "_id": "8",
            "user": "6515451ba5c5b158adebdf09",
            "title": "My note",
            "description": "This is sample desciption",
            "tag": "Personal",
            "date": "2023-09-29T07:05:55.507Z",
            "__v": 0
        },
        {
            "_id": "9",
            "user": "6515451ba5c5b158adebdf09",
            "title": "My note",
            "description": "This is sample desciption546465",
            "tag": "Personal",
            "date": "2023-09-29T07:05:54.929Z",
            "__v": 0
        },
        {
            "_id": "10",
            "user": "6515451ba5c5b158adebdf09",
            "title": "My note",
            "description": "This is sample desciption12",
            "tag": "Personal",
            "date": "2023-09-29T07:05:55.507Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial);
    //add a note 
    const addNote=(title, description,tag)=>{
        const newNote = {
            "_id": "10",
            "user": "6515451ba5c5b158adebdf09",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-09-29T07:05:55.507Z",
            "__v": 0
        }
        setNotes(notes.concat(newNote));
    }
    //edit a note
     const editNote=()=>{
        
    }
    //delete a note
    const deleteNote=()=>{
        
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;