import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddCommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen';

function CommentList ({comments = [], isOpen, toggleOpen}) {
    return (
        <div>
            <button onClick={toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</button>
            {getBody(comments, isOpen)}
        </div>
    )
}

function getBody (comments, isOpen) {
    if(!isOpen) return null;
    if(!comments.length) return (<p>No comments here</p>);

    return (
        <div>
            <ul>
                {comments.map(id => <li key = {id}> <Comment id = {id}/> </li>)}
            </ul>
            <AddCommentForm />
        </div>
    )
}

export default toggleOpen(CommentList);