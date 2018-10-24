import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
    static propTypes = {
    
    };
    
    state = {
        isOpen: false
    };
    
    render() {
        return (
            <div>
                <button onClick={this.toggleOpen}>{this.state.isOpen ? 'Hide comments' : 'Show comments'}</button>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    getBody = () => {
        if(!this.state.isOpen) return null;

        const {comments} = this.props;

        if(!comments|| !comments.length) return (<p>No comments here</p>);

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}> <Comment comment = {comment}/> </li>)}
            </ul>
        )
    }
}

export default CommentList;