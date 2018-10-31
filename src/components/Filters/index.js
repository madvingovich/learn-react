import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectFilter from './Select';
import DateRange from './DateRange';

class Filters extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles} />
                <DateRange/>
            </div>
        )
    }
}

export default Filters;