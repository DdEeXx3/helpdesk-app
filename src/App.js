import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/navigation/navigation-bar';
import Home from './components/home/home';
import FailuresBase from './components/failures-base/failures-base';
import AddFailure from './components/add-failure/add-failure';

function App() {
  return (
    <Router>
      <div>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/failures-base" exact component={FailuresBase} />
            <Route path="/add-failure" exact component={AddFailure} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
