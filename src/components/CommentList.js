import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddCommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Comment {
    static defaultProps = {
        comments:[]
    };
    render() {
        const {isOpen, toggleOpen} = this.props;
        return (
            <div>
                <button onClick={toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody = () => {
        const {isOpen, comments} = this.props;
        if(!isOpen) return null;
        // if(!comments.length) return (
        //     <p>No comments here</p>
        // );

        return (
                <div>
                    <ul>
                        {comments.length ? comments.map(id => <li key = {id}> <Comment id = {id}/> </li>) : <p>No comments here :(  </p>}
                    </ul>
                    <AddCommentForm articleId = {this.props.articleId}/>
                </div>
        )
    }
}

export default toggleOpen(CommentList);