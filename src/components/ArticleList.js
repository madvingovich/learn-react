import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class ArticleList extends Component {
    static propTypes = {

    };

    state = {
        openArticleId: this.props.articles[0].id
    };

    render() {
        const {articles} = this.props;
        const articleList = articles.map(article =>
            <li key = {article.id}>
                <Article article={article}
                         isOpen = {article.id === this.state.openArticleId}
                         toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
                />
            </li>);
        return (
            <ul>
                {articleList}
            </ul>
        )
    }

    toggleOpenArticle = (openArticleId) => {
        openArticleId === this.state.openArticleId ?
            this.setState({ openArticleId: null }) :
            this.setState({ openArticleId });
    }
}

export default ArticleList;