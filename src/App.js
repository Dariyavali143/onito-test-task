import React from 'react';
import RegisterPage from './Components/RegisterPage';
import Getdata from './Components/Getdata';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {




  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/Getdata" element={<Getdata />} />
          <Route path="/*" element={<h1> PageNotFound</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
