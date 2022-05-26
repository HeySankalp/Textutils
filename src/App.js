import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "dark mode disabled");
    }

    else {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(0 14 54)';
      showAlert("success", "dark mode enabled");
    }
  }

  return (
    <>
      <Router>
        
        <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />

        <Switch>
          <Route exact path="/"> 
            <Form heading="Text editor application" showAlert={showAlert} Mode={Mode} />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;

