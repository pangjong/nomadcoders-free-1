import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import AppRouter from '../components/twitterCloneCoding/components/AppRouter';


// 좀더 연구필요
function App() {
  return (
    <AppRouter />
  );
}

export default App;
