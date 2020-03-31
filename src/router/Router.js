  import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import Profile from '../page/Profile';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        );
    }
}

export default Router;