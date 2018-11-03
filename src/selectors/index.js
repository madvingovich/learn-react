import {createSelector} from 'reselect';


const articlesGetter = (state) => (state.articles);
const filtersGetter = (state) => (state.filters);
const idGetter = (state, props) => (props.id);
const commentsGetter = (state) => (state.comments);

export const filterArticles = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const {selected, dateRange: {
        from,
        to
    }} = filters;

    const articleIds = Object.keys(articles).map(id => (id));

    return articleIds.filter(id => {
        return (!selected.length || selected.includes(id)) &&
            (!from || !to || articles[id].date > from.toISOString() && articles[id].date < to.toISOString());
    })
});
// to create selector for every item
export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id];
});

export const articlesSelector = createSelector(articlesGetter, idGetter, (articles, id) => {
    return articles[id];
});

export const articlesToArraySelector = createSelector(articlesGetter, (articles) => {
    return Object.keys(articles).map(key => key);
});
