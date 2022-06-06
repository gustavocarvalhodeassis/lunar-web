import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Components/NavBar/NavBar';
import NavBarMobile from './Components/NavBarMobile/NavBarMobile';
import Home from './Landing/Home/Home';
import FloatingActionButton from './Components/Global/Elements/floatingActionButton';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <NavBarMobile />
    <Home />
    <FloatingActionButton />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
