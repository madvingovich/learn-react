import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT} from '../constans';
import {arrToMap} from "../helpers";

const commentsMap = arrToMap(defaultComments);

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_COMMENT : {
            const id = action.randomId;

            return {
                ...commentsState,
                [id]: payload.state
            }
        }
    }

    return commentsState
}