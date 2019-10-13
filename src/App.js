import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/navigation/navigation-bar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import FailuresBase from './components/failures-base/failures-base';
import AddFailure from './components/add-failure/add-failure';
import Bathroom from './components/categories/bathroom/bathroom';
import Media from './components/categories/media/media';
import Electronics from './components/categories/electronics/electronics';
import Furnishings from './components/categories/furnishings/furnishings';
import Kitchen from './components/categories/kitchen/kitchen';
import Renovation from './components/categories/renovation/renovation';

function App() {
  return (
    <Router>
      <div>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/failures-base" component={FailuresBase} />
            <Route path="/add-failure" component={AddFailure} />
            <Route path="/bathroom" component={Bathroom} />
            <Route path="/media" component={Media} />
            <Route path="/electronics" component={Electronics} />
            <Route path="/furnishings" component={Furnishings} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/renovation" component={Renovation} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
