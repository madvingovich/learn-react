import React, {Component as ReactComponent} from 'react';
import PropTypes from 'prop-types';

export default (OriginalComponent) => class ComponentWithAccordion extends ReactComponent {
    state = {
        openArticleId: this.props.articles[0].id
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }

    toggleOpenArticle = (openArticleId) => ev => {
        openArticleId === this.state.openArticleId ?
            this.setState({ openArticleId: null }) :
            this.setState({ openArticleId });
    }
}