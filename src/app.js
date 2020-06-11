import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./app.css";
import Home from "./routes/home/home";
import Statistics from "./routes/statistics/statistics";


function App() {
  return (
    <div>
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/statistics' component={Statistics} />
          <Route path='/*' component={Home} />
        </Switch>
      </Router>
    </div>

    </div>
  );
}

export default App;
