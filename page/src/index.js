import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.css';
import {AppProvider} from './util/context'
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
    <App />
    </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


