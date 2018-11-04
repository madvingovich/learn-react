import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';
import {filterArticles} from '../selectors';
import {loadAllArticles} from "../AC";
import Loader from './Loader';


class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        toggleOpenItem: PropTypes.func.isRequired,
        openItemId: PropTypes.string
    };

    componentDidMount() {
        const {loading, loaded, loadAllArticles} = this.props;
        if(!loaded || !loading) loadAllArticles();
    }

    render() {
        const {articles, openItemId, toggleOpenItem, loading, loaded} = this.props;
        if(loading) return <Loader />;
        const articleList = articles.map(article =>
            <li key = {article.id}>
                <Article id={article.id}
                         article = {article}
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

export default connect((state) => {//map store state to props
    return {
        articles: filterArticles(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, { loadAllArticles })(accordion(ArticleList));