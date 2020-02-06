import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import {addPost} from './redux/state.js';
import {addDialogs} from './redux/state.js';








 export let renderEntireTree = (state) => {
  ReactDOM.render(<App appState ={state} addPost ={addPost} addDialogs={addDialogs} />, document.getElementById('root'));

}




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
