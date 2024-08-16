// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  const toggleMode=()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      // setInterval(() => {
      //   document.title = "TextUtils-Dark";
      // }, 2000);
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // setInterval(() => {
      //   document.title = "TextUtils-Light";
      // }, 2000);
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Snay's Hub" aboutText='About Us' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3 mx-3" mode={mode}>
     <Routes>
          <Route path="/about" element={<About  mode={mode}  />}>
          </Route>
          <Route path="/" element={<Textform heading="Try TextUtils-Word COunter, CHaracter Counter, Remove extra spaces" showAlert={showAlert} mode={mode} />}> 
          </Route>
    </Routes>
      </div>
  
    </Router> 
    </>
  );
}

export default App;
