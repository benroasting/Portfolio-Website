import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';



ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Typography />
    <App />
  </BrowserRouter>
, document.getElementById('root'));


