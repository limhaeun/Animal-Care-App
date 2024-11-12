import React, {Component} from 'react'
import './App.css';
import Customer from './components/Customer';
import { render } from '@testing-library/react';
import LoginForm from './components/LoginForm/LoginForm';

const customer = {
  'name' : '홍길동',
  'birth' : '960614',
  'gender' : '남성'
}

class App extends Component {
  render(){
    return (
      <LoginForm/>
    );
  }
}

export default App;
