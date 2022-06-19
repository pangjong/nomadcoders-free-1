import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseState from '../components/useState/UseState';
import UseInput from '../components/useState/UseInput';
import UseTabs from '../components/useState/UseTabs';
import UseEffect from '../components/useEffect/UseEffect';
import UseTitle from '../components/useEffect/UseTitle';
import UseClick from '../components/useEffect/UseClick';
import UseNetwork from '../components/useEffect/UseNetwork';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      hello
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
