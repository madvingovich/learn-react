import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {connect} from 'react-redux';
import {changeSelection} from '../../AC';
import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
    static propTypes = {

    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <Select options = {options} value = {this.props.selected} onChange = {this.changeSelection} multi/>
        )
    }

    changeSelection = selection => {
        const {changeSelection} = this.props;
        changeSelection(selection.map(option => (option.value)));
    };
}

export default connect(({filters, articles}) => ({
    selected: filters.selected,
    articles
}), { changeSelection })(SelectFilter);