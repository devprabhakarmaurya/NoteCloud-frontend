import React from 'react'
import Note from '../components/Note'

function Home(props) {
  return (
      <Note showAlert={props.showAlert}/>
  )
}

export default Home