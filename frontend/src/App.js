import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import ChatBot from './pages/chatBot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/chat-bot' element={<ChatBot/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
