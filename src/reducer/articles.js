import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE} from '../constans';

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articleState = articlesMap, action) => {
    const {type, payload} = action;

    switch (type) {
        // case DELETE_ARTICLE: return articleState.filter((article) => {
        //     return article.id !== payload.id
        // })
        case DELETE_ARTICLE: {
            const filteredArticlesState = {...articleState};
            delete filteredArticlesState[payload.id];
            return filteredArticlesState
        }
    }

    return articleState
}