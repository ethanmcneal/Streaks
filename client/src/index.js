import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "semantic-ui-css/semantic.min.css"
import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './providers/AuthProvider';
import {initMiddleware} from 'devise-axios';
import QueryProvider from './providers/QueryProvider';

initMiddleware()
ReactDOM.render(
  <AuthProvider>
    <QueryProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </QueryProvider>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
