import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE} from '../constans';

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter((article) => {
            return article.id !== payload.id
        })
    }

    return articleState
}