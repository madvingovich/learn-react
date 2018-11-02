import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
    
    handleIncrement = () => {
        const {increment} = this.props;
        increment();
    }
}

function mapStateToProps(state) {
    return {// помимо этого, в пропсы попадет dispatch
        counter: state.count
    }
}

const mapToDispatch = {// добавить в пропсы екшн креаторы
    increment
};

// const decorator = connect(mapStateToProps, mapToDispatch);

// export default decorator(Counter);



export default connect((state) => ({
    counter: state.count
}), { increment })(Counter);