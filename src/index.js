import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import Userlist from './Userlist';
import Clock from './Clock';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1> Welcome to  王凡林's website</h1>
    <p> My student ID is B07502100</p>
    <Counter /> 
    <br /><br /><br /><br /><br />
    <Userlist />
    <br /><br /><br /><br /><br />
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
