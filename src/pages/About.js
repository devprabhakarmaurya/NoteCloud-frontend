import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext';

function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update()
  })
  
  return (
    <div>This is about page My name is {a.state.name} And I study in class {a.state.class}
    </div>
  )
}

export default About