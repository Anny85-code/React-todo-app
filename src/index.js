import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// component file
import TodoContainer from './Components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
