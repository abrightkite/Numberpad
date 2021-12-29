import './App.css';
import React from 'react';
import NumberpadContainer from './components/Numberpad/containers/NumberpadContainer';
import ResultContainer from './components/Numberpad/containers/ResultContainer';
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact  element={<NumberpadContainer />} />
        <Route path="/result/:phoneNumber" exact element={<ResultContainer />}/>
      </Routes>
    </Router>
  );
}

export default App;
