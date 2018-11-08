import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddCommentForm from './CommentForm'
import Loader from './Loader';
import toggleOpen from '../decorators/toggleOpen';
import {loadArticleComments} from '../AC';
import {connect} from 'react-redux';

class CommentList extends Component {
    static defaultProps = {
        comments:[]
    };

    componentWillReceiveProps(nextProps) {
        const {isOpen, article, loadArticleComments} = nextProps;
        if(!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) loadArticleComments(article.id)
    }

    render() {
        const {isOpen, toggleOpen, article} = this.props;
        return (
            <div>
                <button onClick={toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</button>
                {this.getBody({article, isOpen})}
            </div>
        )
    }

    getBody = ({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) => {
        // const {isOpen, comments} = this.props;
        if(!isOpen) return null;
        if(commentsLoading) return <Loader/>;
        if(!commentsLoaded) return null;

        return (
                <div>
                    <ul>
                        {comments.length ? comments.map(id => <li key = {id}> <Comment id = {id}/> </li>) : <p>No comments here :(  </p>}
                    </ul>
                    <AddCommentForm articleId = {id}/>
                </div>
        )
    }
}

export default connect(null, { loadArticleComments })(toggleOpen(CommentList));