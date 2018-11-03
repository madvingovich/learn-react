import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelectorFactory} from "../selectors";;

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
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = () => {// to create selector for every comment
    const commentSelector = commentSelectorFactory();//save create selector func in closure
    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
};

export default connect(mapStateToProps)(Comment);