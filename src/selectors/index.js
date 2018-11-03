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
    // return articles;

    return articles.filter(article => {
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || article.date > from.toISOString() && article.date < to.toISOString());

    })
});
// to create selector for every comment
export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id];
});

export const articlesSelector = () => createSelector(articlesGetter, idGetter, (articles, id) => {
    return articles[id];
});
