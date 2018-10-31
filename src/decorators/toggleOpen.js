
import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class ToggleOpenComponent extends ReactComponent {
    state = {
        isOpen: false
    };

    componentDidMount() {
        // console.log('mounting')
    }
    
    componentDidUpdate() {
        // console.log('updating')
    }
    
    componentWillUnmount() {
        // console.log('unmount')
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
