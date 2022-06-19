import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import Home from './Home';


// 좀더 연구필요
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="useState" element={<useState />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
