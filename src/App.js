import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { Routes } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="heading">Shoe Shopping Cart Project</h1>
      <Routes>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
