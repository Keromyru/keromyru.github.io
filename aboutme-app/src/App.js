import './App.scss';
import React from 'react';
import NavComponent from './navigation/NavComponent';
import {Route, Routes} from 'react-router-dom';
import ResumePage from './resume/ResumePage';
import WelcomePage from './WelcomePage';
import TableData from './features/TableData';

export default function App() {
  return (
    <div className="App">
      <NavComponent/>
      <Routes>
        <Route exact path="/" element={<WelcomePage/>} />
        <Route path="/resume" element={<ResumePage/>}/>
      </Routes>
      <TableData/>
    </div>
  );
}

