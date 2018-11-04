import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment} from "../../AC";
import './CommentForm.css'

class AddCommentFormForm extends Component {
    static propTypes = {

    };
    state = {
        user: '',
        text: '',
        articleId: this.props.articleId
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                User:
                <input
                    ref = 'user'
                    type="text"
                    value={this.state.user}
                    className={this.getClassName('user')}
                    onChange={this.handleInputChange('user')}
                    placeholder='user'
                />
                Comment:
                <input
                    ref = 'text'
                    type="text"
                    value={this.state.text}
                    className={this.getClassName('text')}
                    onChange={this.handleInputChange('text')}
                    placeholder='text'
                />
                <button type='submit'>Add comment</button>
            </form>
        )
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.user.length || !this.state.text.length || this.refs.user.classList.contains('input-error') || this.refs.text.classList.contains('input-error')) return;

        const {addComment} = this.props;

        addComment(this.state);

        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => {
        return this.state[type].length && this.state[type].length < validate[type].min ? 'input-error' : '';
    };

    handleInputChange = type => ev => {
        const value = ev.target.value;

        if(value.length > validate[type].max) return;

        this.setState({[type]: value})
    };
}

const validate = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
};

export default connect(null, { addComment })(AddCommentFormForm);