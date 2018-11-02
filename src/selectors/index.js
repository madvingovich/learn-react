import {createSelector} from 'reselect';


const getArticles = (state) => (state.articles);
const getFilters = (state) => (state.filters);

export const filterArticles = createSelector(getFilters, getArticles, (filters, articles) => {
    const {selected, dateRange: {
        from,
        to
    }} = filters;

    return articles.filter(article => {
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || article.date > from.toISOString() && article.date < to.toISOString());

    })
})
