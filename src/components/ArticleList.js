import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        toggleOpenItem: PropTypes.func.isRequired,
        openItemId: PropTypes.string
    };

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props;
        const articleList = articles.map(article =>
            <li key = {article.id}>
                <Article article={article}
                       isOpen = {article.id === openItemId}
                       toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>);
        return (
            <ul>
                {articleList}
            </ul>
        )
    }

}

export default accordion(ArticleList);