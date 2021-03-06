import {createSelector} from 'reselect';
import {mapToArr, arrToMap} from '../helpers';


const articlesGetter = (state) => (state.articles.entities);
const filtersGetter = (state) => (state.filters);
const idGetter = (state, props) => (props.id);
const commentsGetter = (state) => (state.comments.entities);

export const filterArticles = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const {selected, dateRange: {
        from,
        to
    }} = filters;

    return mapToArr(articles).filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
});
// to create selector for every item
export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments.get(id);
});
