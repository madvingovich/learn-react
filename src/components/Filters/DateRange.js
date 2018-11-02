import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker, {DateUtils} from 'react-day-picker';
import {connect} from 'react-redux';
import {changeDate} from '../../AC';
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {

    };
    static defaultProps = {
        numberOfMonths: 1
    };

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.props.dateRange);
        const {changeDate} = this.props;
        changeDate(range);
    };

    handleResetClick = () => {
        const {changeDate} = this.props;
        changeDate({from: null, to: null});
    };


    render() {
        const{from, to} = this.props.dateRange;
        const modifiers = {start: from, end: to};

        return (
            <div>
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from && to &&
                    `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`
                    }
                    {from && to && (
                        <button className='link' onClick={this.handleResetClick}>Reset</button>
                    )}
                </p>
                <DayPicker
                    className='Selectable'
                    numberOfMonth={this.props.numberOfMonths}
                    selectedDays={[from, {from, to}]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        )
    }
}

export default connect(({filters}) => ({
    dateRange: filters.dateRange
}), { changeDate })(DateRange);