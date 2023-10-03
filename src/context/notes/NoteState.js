import NoteContext from './noteContext';
import React, { useState } from 'react'

const NoteState = (props) => {
    const [notes, setNotes] = useState([]);
    // const host="http://localhost:5000"
    // const id = ""
    // Get All Notes
    const getNote = async () => {
        const url = "http://localhost:5000/api/note/getnotes"
        try {
            const response = await fetch(url, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUxNTQ1MWJhNWM1YjE1OGFkZWJkZjA5IiwiaWF0IjoxNjk1OTIxODk3fQ.bdq_93kzLeGLQd8qIRyOpRY2wUG_DDTuF0Vbr17rQf4"  // Replace with your token
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
        const url = "http://localhost:5000/api/note/addnote"
        try {
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUxNTQ1MWJhNWM1YjE1OGFkZWJkZjA5IiwiaWF0IjoxNjk1OTIxODk3fQ.bdq_93kzLeGLQd8qIRyOpRY2wUG_DDTuF0Vbr17rQf4"  // Replace with your token
                },
                body: JSON.stringify({title,description,tag})
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
    const editNote = async (id , title , description, tag) => {
        // const url = "http://localhost:5000/api/note/updatenote/651be11c2be3c1bd0b73434e"
        // try {
        //     const response = await fetch(url, {
        //         method: "PUT",
        //         mode: "cors",
        //         cache: "no-cache",
        //         credentials: "same-origin",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUxNTQ1MWJhNWM1YjE1OGFkZWJkZjA5IiwiaWF0IjoxNjk1OTIxODk3fQ.bdq_93kzLeGLQd8qIRyOpRY2wUG_DDTuF0Vbr17rQf4"  // Replace with your token
        //         },
        //         body: JSON.stringify({title,description,tag})
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }

        //     const data = await response.json();
        //     console.log(data)
        //     // setNotes(notes.concat(data.note));  // Update the state with fetched notes
        // } catch (error) {
        //     console.error('Error fetching data:', error);
        // }
    }
    //delete a note
    const deleteNote = async (id) => {
        // console.log("Deleting with " +id)
        const url = "http://localhost:5000/api/note/deletenote/"+id;
        try {
            // prompt("Are You Sure ? ");
            const response = await fetch(url, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUxNTQ1MWJhNWM1YjE1OGFkZWJkZjA5IiwiaWF0IjoxNjk1OTIxODk3fQ.bdq_93kzLeGLQd8qIRyOpRY2wUG_DDTuF0Vbr17rQf4"  // Replace with your token
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