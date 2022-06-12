import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import CatFacts from './Pages/CatFacts';
import Exchange from './Pages/Exchange';
import Items from './Pages/Items';

import Register from './Components/Items/Register';
function App(props) {
  
  return (
    <div className="App">
      <Link to="/cat-facts">Cat Facts</Link> | {" "}
      <Link to="/exchange">Exchange</Link> | {" "}
      <Link to="/items">Items</Link>
      
      <Routes>
        <Route path="/cat-facts" element={<CatFacts />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/items" element={<Items />} >
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

        </Route>

        <Route path="*" element={<CatFacts />} />
      </Routes>
    </div>
  );
}

export default App;
