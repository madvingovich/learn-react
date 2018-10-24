import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        })
    };

    componentWillReceiveProps(nextProps) {
        console.log('updating', this.props.isOpen, nextProps.isOpen);
    }

    componentWillMount() {
        console.log('will mount, shas budem stroit\' virtual dom');
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const text = isOpen ? 'Close' : 'Open';

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
             </div>
        )
    }

    setContainerRef = ref => {
        console.log('ref - ', ref)
    }
    
    componentDidMount() {
        console.log('vse, v real\'nom dome vse gtovo, tut zbs veshat\' sobitiya');
    }

    getBody = () => {
        const {article, isOpen} = this.props;

        if(!isOpen) return null;

        const {comments} = article;
        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {comments} ref = {this.commentsRef}/>
            </div>
        );
    }

    commentsRef = ref => {
        console.log('comments ref - ', ref);
        console.log('comments ref findDOMNode - ', findDOMNode(ref));
    }
}

export default Article;