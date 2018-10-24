import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpenArticle: PropTypes.func,
        openArticleId: PropTypes.string
    };

    render() {
        const {articles, openArticleId, toggleOpenArticle} = this.props;
        console.log(this.props)
        const articleList = articles.map(article =>
            <li key = {article.id}>
                <Article article={article}
                         isOpen = {article.id === openArticleId}
                         toggleOpen = {toggleOpenArticle(article.id)}
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