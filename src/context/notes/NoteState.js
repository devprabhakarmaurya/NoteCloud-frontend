import NoteContext from './noteContext';
import React, {useState} from 'react'

const NoteState =(props)=>{
    const s1={
        name: "Prabhakar",
        class: "X A4"
    }
    const update =()=>{
        setTimeout(() => {
            setState({
                name: "Disha",
                class: "VIII A4"
            })
        }, 1000);
    }
    const [state, setState] = useState(s1)
    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;