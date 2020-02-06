import React from 'react';
import Header from './components//Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// Тут я разбил код на отдельные компоненты, которые находяться в папке components. Так гораздо легче читать код.
const App = (props) => {

  return (
           <BrowserRouter>
    <div className = "container-fluid" >
              <Header name='Welcome' />

             <div className='container my-2'>
                <div className='row'>
                   <Nav />
                    <Route  path='/dialogs' render={ ()=> <Dialogs dialogs = {props.appState.dialogs} message = {props.appState.message} addDialogs={props.addDialogs} /> }  />
                    <Route path='/profile' render={ ()=> <Profile posts = {props.appState.posts} addPost={props.addPost} />}  />
                    {/*<Route path='/feed' component ={}/>*/}
                    {/*<Route path='/music' component ={}/>*/}


             </div>
             </div>
    </div>
</BrowserRouter>
  );
}













export default App;
