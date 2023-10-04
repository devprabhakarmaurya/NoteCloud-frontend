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
import Alert from './components/Alert';
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';

function App() {
   const [mode, setMode] = useState("dark");
   const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar mode={mode} showAlert={showAlert} setMode={setMode} />
          <div className="container" data-bs-theme={mode} >
            <Alert alert={alert} mode={mode}/>
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
          <Footer mode={mode}/>
        </Router>
      </NoteState>
      
    </>
  );
}

export default App;
