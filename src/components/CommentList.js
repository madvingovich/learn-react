import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
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
        <ul>
            {comments.map(comment => <li key = {comment.id}> <Comment comment = {comment}/> </li>)}
        </ul>
    )
}

export default toggleOpen(CommentList);