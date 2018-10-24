import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LC extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //jquery works here
    }

    componentWillReceiveProps(nextProps) {
        //update block for new props
    }

    render() {
        return (
            <div ref = 'block'></div>
        )
    }

    componentWillUnmount() {
        //do some clean up
    }
}

export default LC;