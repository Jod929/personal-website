import React, { useState, useEffect } from 'react';
import app from './app.css';
import Topbar from '../Topbar/Topbar.jsx';
import './app.css';


function App() {

  const [count, setCount] = useState(0);


  useEffect(() => {
    document.url = `Joddy's website #${count}`
  })

  return (
    <div id="main">
      <h1>
        <Topbar />
        <p id="click">youve clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Add somethig</button>
      </h1>
    </div>
  )
}

export default App;