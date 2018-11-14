import {
    DELETE_ARTICLE, INCREMENT, SELECT_CHANGE, DATE_CHANGE,
    ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, FAIL, SUCCESS,
    LOAD_ARTICLE_COMMENTS, LOAD_ALL_COMMENTS, LOAD_COMMENTS_FOR_PAGE
} from '../constans';

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

export function addComment(state) {
    return {
        type: ADD_COMMENT,
        payload: { state },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        });

        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id, response}
                }))
                .catch(error => dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: { id, error }
                }))
        }, 1000)
    }
}

export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: { articleId },
        callAPI: `api/comment?article=${articleId}`
    }
}

export function checkAndLoadCommentsForPage(page) {
    return (dispatch, getState) => {
        const {comments: {pagination}} = getState();

        if(pagination.getIn([`page${page}`, 'loading']) || pagination.getIn([`page${page}`, 'ids'])) return;

        dispatch({
            type: LOAD_COMMENTS_FOR_PAGE,
            payload: {page},
            callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
        })
    }
}