import './App.css';
import React from 'react';
import NumberpadContainer from './components/Numberpad/containers/NumberpadContainer';
import ResultContainer from './components/Numberpad/containers/ResultContainer';
import { HashRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact  component={NumberpadContainer} />
        <Route path="/result/:phoneNumber" exact component={ResultContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
