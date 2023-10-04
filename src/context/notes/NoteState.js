import NoteContext from './noteContext';
import React, { useState } from 'react'

const NoteState = (props) => {
    const [notes, setNotes] = useState([]);
    const host = "http://localhost:5000"
    // const id = ""
    // Get All Notes
    const getNote = async () => {
        const url = `${host}/api/note/getnotes`
        try {
            const response = await fetch(url, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')  // Replace with your token
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data)
            setNotes(data);  // Update the state with fetched notes
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    //add a note 
    const addNote = async (title, description, tag) => {
        const url = `${host}/api/note/addnote`
        try {
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')  // Replace with your token
                },
                body: JSON.stringify({ title, description, tag })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data)
            setNotes(notes.concat(data.note));  // Update the state with fetched notes
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
    //edit a note
    const editNote = async (id, title, description, tag) => {
        const url = `${host}/api/note/updatenote/${id}`
        try {
            const response = await fetch(url, {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')  // Replace with your token
                },
                body: JSON.stringify({ title, description, tag })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const updatedNote = await response.json();
            console.log(updatedNote);
            // Update the state with the modified note
            setNotes(prevNotes => {
                return prevNotes.map(note =>
                    note._id === updatedNote._id ? updatedNote : note
                );
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    //delete a note
    const deleteNote = async (id) => {
        // console.log("Deleting with " +id)
        const url = `${host}/api/note/deletenote/${id}`;
        try {
            // alert("Are You Sure ? ");
            const response = await fetch(url, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')  // Replace with your token
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            const filteredNotes = notes.filter((note) => { return note._id !== id })
            setNotes(filteredNotes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;