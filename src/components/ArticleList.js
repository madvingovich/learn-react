import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class ArticleList extends Component {
    static propTypes = {

    }

    render() {
        const {articles} = this.props;
        const articleList = articles.map(article => <li key = {article.id}><Article article={article}/></li>);
        return (
            <ul>
                {articleList}
            </ul>
        )
    }
}

export default ArticleList;