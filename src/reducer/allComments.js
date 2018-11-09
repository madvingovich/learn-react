import {LOAD_ALL_COMMENTS} from '../constans';

const defaultComments = [];

export default (allCommentsState = defaultComments, action) => {
    const {type, response} = action;

    switch (type) {
        case LOAD_ALL_COMMENTS: {
            console.log(response);
            return allCommentsState;
        }

        return allCommentsState;
    }
};