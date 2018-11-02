import {SELECT_CHANGE, DATE_CHANGE, DELETE_ARTICLE} from '../constans';

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const {type, payload} = action;

    switch (type) {
        case DATE_CHANGE:
            return {...filters, dateRange: payload.range}

        case SELECT_CHANGE:
            return {...filters, selected: payload.selected}

        case DELETE_ARTICLE:
            return {...filters, selected: payload.selected.filter(id => (id !== payload.id))}
    }

    return filters;
};