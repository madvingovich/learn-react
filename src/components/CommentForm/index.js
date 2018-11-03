import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CommentForm.css'

class AddCommentFormForm extends Component {
    static propTypes = {

    };
    state = {
        user: '',
        text: ''
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                User:
                <input
                    type="text"
                    value={this.state.user}
                    className={this.getClassName('user')}
                    onChange={this.handleInputChange('user')}
                    placeholder='user'
                />
                Comment:
                <input
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
}

export default AddCommentFormForm;