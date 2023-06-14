import React, { useContext } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Connecting from './modules/connecting';

function App() {
  
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Connecting}></Route>
      </Routes>
    </div>
  );
}

export default App;
