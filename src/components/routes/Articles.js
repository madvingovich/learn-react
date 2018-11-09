import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Articlelist from '../ArticleList';
import Article from '../Article';
import {Route} from 'react-router-dom';

class Articles extends Component {
    static propTypes = {
    
    };
    
    render() {
        return (
            <div>
                <Articlelist />
                {/*children - рендерит всегда*/}
                <Route path = '/articles' children = {this.getIndex} exact/>
                <Route path = '/articles/:id' render = {this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
        const {id} = match.params;

        return (
            <Article id = {id} isOpen key = {id}/>
        )

    }

    getIndex = ({match}) => {
        if(!match) return <h2>Article Page:</h2>
        return <h2>Please select article</h2>;
    }
}

export default Articles;