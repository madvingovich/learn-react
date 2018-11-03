import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {connect} from 'react-redux';
import {changeSelection} from '../../AC';
import {articlesToArraySelector} from '../../selectors';
import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
    static propTypes = {
        articlesId: PropTypes.array.isRequired,
        articles: PropTypes.object.isRequired,
    };

    render() {
        const {articlesId, articles} = this.props;
        const options = articlesId.map(id => ({
            label: articles[id].title,
            value: id
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

export default connect((state, ownProps) => ({
    selected: state.filters.selected,
    articles:state.articles,
    articlesId: articlesToArraySelector(state, ownProps)
}), { changeSelection })(SelectFilter);