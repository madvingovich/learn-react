import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {connect} from 'react-redux';
import {changeSelection} from '../../AC';
import {articlesToArraySelector} from '../../selectors';
import {mapToArr} from "../../helpers";
import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
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
    articles: mapToArr(articles)
}), { changeSelection })(SelectFilter);