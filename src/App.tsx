import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Launches from './components/Launches/Launches';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/launches' element={<Launches />} />
      </Routes>
    </div>
  );
}

export default App;
