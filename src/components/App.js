import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import ArticleList from './ArticleList';
import Filters from './Filters';
import Counter from './Counter';


class App extends Component {
    static propTypes = {
    
    };

    render() {
        const {articles} = this.props;
        return (
            <div>
                <Counter />
                <UserForm/>
                <Filters articles = {[]}/>
                <ArticleList />
            </div>
        )
    }




}

export default App;