import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT} from '../constans';
import {arrToMap} from "../helpers";


const articlesMap = arrToMap(defaultArticles);

export default (articleState = articlesMap, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE: {
            const filteredArticlesState = {...articleState};
            delete filteredArticlesState[payload.id];
            return filteredArticlesState
        }

        case ADD_COMMENT: {
            const {articleId} = payload.state;
            const article = articleState[articleId];
            return {
                ...articleState,
                [articleId]: {
                    ...article,
                    comments: [...article.comments || [], action.randomId]
                }
            };
        }
    }

    return articleState
}