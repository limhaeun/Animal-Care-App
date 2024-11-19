import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom';

import MainForm from './components/MainForm/MainForm';
import MessageForm from './components/MessageForm/MessageForm';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
    return (
            <Routes>
              
              <Route path='/main' element={<MainForm/>}></Route>
              <Route path='/message' element={<MessageForm/>}></Route>
              <Route path='/login' element={<LoginForm/>}></Route>
              <Route path='/' element={<MainForm/>}></Route>
              
            </Routes>
    );
}

export default App;
