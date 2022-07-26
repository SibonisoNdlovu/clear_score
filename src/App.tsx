import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='app' data-testid="app">
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
