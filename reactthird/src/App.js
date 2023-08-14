
import React from 'react';
import LoginForm from './LoginForm';


import logo from './logo.svg';
import './App.css';







function App() {

  
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>




        <input
          type="text"
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          title="Must be at least 8 characters long with letters, numbers, and special characters."
        />

        
<LoginForm />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      
     
    </div>
  );
}

export default App;
