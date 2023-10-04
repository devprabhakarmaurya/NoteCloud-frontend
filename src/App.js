import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
// import Alert from './components/Alert';
import { useState } from 'react';

function App() {
   const [mode, setMode] = useState("light");
  return (
    <>
      <NoteState>
        <Router>
          <Navbar mode={mode} setMode={setMode} />
          <div className="container" data-bs-theme={mode} >
            {/* <Alert message="Hello I am Alert which has fixed position" mode={mode}/> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
      
    </>
  );
}

export default App;
