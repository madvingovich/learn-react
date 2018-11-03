import {normalizedComments as defaultComments} from '../fixtures';
import {DELETE_ARTICLE} from '../constans';

const commentsMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
}, {});

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action;

    switch (type) {

    }

    return commentsState
}