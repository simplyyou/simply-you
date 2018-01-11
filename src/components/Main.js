import React, { Component } from 'react';
import Home from './Home';
import Boutique from './Boutique';
import Interiors from './Interiors';
import Signs from './Signs';
import Seasonal from './Seasonal';
import Gifts from './Gifts';
import Services from './Services';
import Contact from './Contact';
import Team from './Team';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/boutique' component={Boutique}/>
          <Route path='/interiors' component={Interiors}/>
          <Route path='/signs' component={Signs}/>
          <Route path='/gifts' component={Gifts}/>
          <Route path='/seasonal' component={Seasonal}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/team' component={Team}/>
        </Switch>
      </div>
    );
  }
}

export default Main;