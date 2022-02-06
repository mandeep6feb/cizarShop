import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/main.scss"
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
