import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS} from '../constans';
import {arrToMap} from "../helpers";
import {Map, Record, OrderedMap} from 'immutable';

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
});

const ReducerState = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}),
    total: null
});


export default (commentsState = new ReducerState(), action) => {
    const {type, payload, response} = action;

    switch (type) {
        case ADD_COMMENT : {
            const id = action.randomId;
            const {user, text} = payload.state;

            return commentsState.setIn(['entities', id], new CommentRecord({user, text, id}));
        }


        case LOAD_ARTICLE_COMMENTS + SUCCESS: {
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))
        }

        case LOAD_COMMENTS_FOR_PAGE + START: {
            return commentsState.setIn(['pagination', `page${payload.page}`, 'loading'], true)
        }

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS: {
            return commentsState
                .set('total', response.total)
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .setIn(['pagination', `page${payload.page}`, 'ids'], response.records.map(comment => comment.id))
                .setIn(['pagination', `page${payload.page}`, 'loading'], false)
        }
    }

    return commentsState
}