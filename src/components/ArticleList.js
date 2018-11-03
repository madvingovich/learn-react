import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';
import {filterArticles, articlesToArraySelector} from '../selectors';


class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        toggleOpenItem: PropTypes.func.isRequired,
        openItemId: PropTypes.string
    };

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props;
        const articleList = articles.map(id =>
            <li key = {id}>
                <Article id={id}
                       isOpen = {id === openItemId}
                       toggleOpen = {toggleOpenItem(id)}
                />
            </li>);
        return (
            <ul>
                {articleList}
            </ul>
        )
    }

}

export default connect((state) => {//map store state to props
    return {
        articles: filterArticles(state),
        // articles: state.articles,
    }
})(accordion(ArticleList));