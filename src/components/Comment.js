import React from 'react';
import PropTypes from 'prop-types';

function Comment (props) {
    const {comment} = props;
    return (
        <div>
            <h2 style={{color:"red"}}>{comment.user}</h2>
            <p>{comment.text}</p>
        </div>
    )
}
Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}
export default Comment;