import {handleActions} from 'redux-actions';
import {loadStart, loadComplete, loadFail, loadNextComplete, loadPrevComplete} from "actions/comments";

const initialState = {
    loading: true,
    entities: [],
    page: 1,
};

export default handleActions({
    [loadStart]: (state) => {
        return {
            ...state,
            loading: true,
        };
    },
    [loadComplete]: (state, action) => {
        return {
            loading: false,
            entities: action.payload.map((comment) => ({
                id: comment.id,
                author: comment.name,
                message: comment.body,
            })),
            page: state.page,
        };
    },
    [loadFail]: (state, action) => {
        return {
            loading: false,
            entities: [],
        }
    },
    [loadNextComplete]: (state, action) => {
        return {
            loading: false,
            entities: action.payload.map((comment) => ({
                id: comment.id,
                author: comment.name,
                message: comment.body,
            })),
            page: state.page + 1,
        }
    },
    [loadPrevComplete]: (state, action) => {
        return {
            loading: false,
            entities: action.payload.map((comment) => ({
                id: comment.id,
                author: comment.name,
                message: comment.body,
            })),
            page: state.page - 1,
        }
    },
}, initialState);