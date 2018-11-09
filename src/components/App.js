import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import Articles from './routes/Articles';
import NotFound from './routes/NotFound';
import Filters from './Filters';
import Counter from './Counter';
import Comments from './Comments';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';


class App extends Component {
    static propTypes = {
    
    };

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <h2>Main Menu</h2>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/counter'>Counter</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/filters'>Filters</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/articles'>Articles</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/comments'>Comments</NavLink></div>
                    </div>
                    <UserForm/>
                    <Switch>
                        <Route path="/counter" component = {Counter}/>
                        <Route path = "/filters" component = {Filters}/>
                        <Route path = "/articles" component = {Articles}/>
                        <Route path = "/comments" component = {Comments}/>
                        <Route path = "*" component = {NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }




}

export default App;