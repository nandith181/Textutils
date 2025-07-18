//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/


function App() {
 
  const [mode, setMode] = useState('dark');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(()  =>{
        setAlert(null);
      },1500);
    }


  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
   <div>
    <Navbar title = "TEXTUTILS" about = "About Us"  mode = {mode} toggleMode={toggleMode} />
    <Alert alert = {alert}/>
    <div className='container my-3'>
      <TextForm showAlert={showAlert} heading = "Enter Your Text To Analyse"  mode = {mode}/>
    </div>
    {/*<About/>*/}
   </div>
  );
}

export default App;

/*<Router>
    <Navbar title = "TEXTUTILS" about = "About Us"  mode = {mode} toggleMode={toggleMode} />
    <Alert alert = {alert}/>
    <div className='container my-3'>
      <Routes>
          <Route path="/About" element={<About />} /> 
          <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter Your Text To Analyse"  mode = {mode}/>}/>
      </Routes>
    </div>
    </Router>*/
