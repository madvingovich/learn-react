import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import { CSSTransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {deleteArticle} from '../../AC';
import './article.css';

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func.isRequired
    };

    state = {
        updateIndex: 0
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    componentWillReceiveProps(nextProps) {
        // console.log('updating', this.props.isOpen, nextProps.isOpen);
    }

    componentWillMount() {
        // console.log('will mount, shas budem stroit\' virtual dom');
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        console.log('update article')

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
                <button onClick={this.handleDelete}>Delete</button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionAppear // возможность анимиррования сразу, при загрузке
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {300}
                    component = 'div' //в какой компонент завернуть
                >
                    {this.getBody()}
                </CSSTransitionGroup>
             </div>
        )
    }

    setContainerRef = ref => {
        // console.log('ref - ', ref)
    };
    
    componentDidMount() {
        // console.log('vse, v real\'nom dome vse gotovo, tut zbs veshat\' sobitiya');
    }

    handleDelete = () => {
        console.log('deleted');
        const{deleteArticle, article} = this.props;

        deleteArticle(article.id);
    };

    getBody = () => {
        const {article, isOpen} = this.props;

        if(!isOpen) return null;

        const {comments} = article;
        return (
            <div>
                <section>{article.text}</section>
                <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                <CommentList key = {this.state.updateIndex} comments = {comments} ref = {this.commentsRef}/>
            </div>
        );
    };

    commentsRef = ref => {
        // console.log('comments ref - ', ref);
        // console.log('comments ref findDOMNode - ', findDOMNode(ref));
    }
}

export default connect(null, { deleteArticle })(Article);