import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS} from '../constans';
import {arrToMap} from "../helpers";
import {Map, Record, OrderedMap} from 'immutable';

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
});

const ReducerState = Record({
    entities: new OrderedMap({})
});


export default (commentsState = new ReducerState(), action) => {
    const {type, payload, response} = action;

    switch (type) {
        case ADD_COMMENT : {
            const id = action.randomId;
            const {user, text} = payload.state;

            return commentsState.setIn(['entities', id], new CommentRecord({user, text, id}));

            // return {
            //     ...commentsState,
            //     [id]: payload.state
            // }
        }


        case LOAD_ARTICLE_COMMENTS + SUCCESS: {
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))
        }
    }

    return commentsState
}