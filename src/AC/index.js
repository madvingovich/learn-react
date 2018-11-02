import {DELETE_ARTICLE, INCREMENT, SELECT_CHANGE, DATE_CHANGE} from '../constans';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeSelection(selected) {
    return {
        type: SELECT_CHANGE,
        payload: { selected }
    }
}

export function changeDate(range) {
    return {
        type: DATE_CHANGE,
        payload: { range }
    }
}