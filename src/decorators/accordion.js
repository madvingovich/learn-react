import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
    state = {
        openItemId: this.props.articles[0].id
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem}/>
    }

    toggleOpenItem = (openItemId) => () => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}