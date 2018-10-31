import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import ArticleList from './ArticleList';
import 'react-select/dist/react-select.css';
import Filters from './Filters';

class App extends Component {
    static propTypes = {
    
    };

    render() {
        const {articles} = this.props;
        return (
            <div>
                <UserForm/>
                <Filters articles = {articles}/>
                <ArticleList articles = {articles}/>
            </div>
        )
    }




}

export default App;