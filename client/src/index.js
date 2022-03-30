import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";
// import Footer from "./Footer";
import { createStore } from "redux";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
