import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';
import {filterArticles} from '../selectors';
import {loadAllArticles} from "../AC";
import Loader from './Loader';
import {NavLink} from 'react-router-dom';


class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string
    };

    componentDidMount() {
        const {loading, loaded, loadAllArticles} = this.props;
        if(!this.props.articles.length && !loaded && !loading) loadAllArticles();
    }

    render() {
        const {articles, loading} = this.props;
        if(loading) return <Loader />;
        const articleList = articles.map(article =>
            <li key = {article.id}>
                <NavLink to = {`/articles/${article.id}`} activeStyle={{color: 'red'}}>
                    {article.title}
                </NavLink>
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
}, { loadAllArticles })(ArticleList);