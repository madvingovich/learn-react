import React, {Component} from 'react'
import CommentList from './CommentList';

export default class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props;
        const text = this.state.isOpen ? 'Close' : 'Open';

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>{text}</button>
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
        const {article} = this.props;
        const {comments} = article;
        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {comments}/>
            </div>
        );
    }
}