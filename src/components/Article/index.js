import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import { CSSTransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {deleteArticle, loadArticle} from '../../AC';
import Loader from '../Loader';
import './article.css';

class Article extends PureComponent {
    static propTypes = {
        //from props
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        id: PropTypes.string.isRequired,
        //from connect
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        }),
    };

    state = {
        updateIndex: 0
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    componentDidMount() {
        const {isOpen, loadArticle, article, id} = this.props;
        if(!article || (!article.text && !article.loading)) loadArticle(id);
    }

    componentWillMount() {
        // console.log('will mount, shas budem stroit\' virtual dom');
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        if(!article) return null;

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
                <button onClick={this.handleDelete}>Delete</button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionAppear // возможность анимиррования сразу, при загрузке
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {300}
                    component = 'div' //в какой компонент завернуть
                >
                    {this.getBody()}
                </CSSTransitionGroup>
             </div>
        )
    }

    setContainerRef = ref => {
        // console.log('ref - ', ref)
    };

    handleDelete = () => {
        console.log('deleted');
        const{deleteArticle, article} = this.props;

        deleteArticle(article.id);
    };

    getBody = () => {
        const {article, isOpen} = this.props;
        console.log(article,isOpen)

        if(!isOpen) return null;

        if(article.loading) return <Loader/>

        return (
            <div>
                <section>{article.text}</section>
                <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                <CommentList key = {this.state.updateIndex} ref = {this.commentsRef} article = {article}/>
            </div>
        );
    };

    commentsRef = ref => {
        // console.log('comments ref - ', ref);
        // console.log('comments ref findDOMNode - ', findDOMNode(ref));
    }
}

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), { deleteArticle, loadArticle})(Article);

