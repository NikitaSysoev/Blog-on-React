import {handleActions} from 'redux-actions';
import {loadStart, loadComplete, loadFail, loadNextComplete, loadPrevComplete} from "actions/posts";

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
        }
    },
    [loadComplete]: (state, action) => {
        return {
            loading: false,
            entities: action.payload.map((post) => ({
                id: post.id,
                title: post.title,
                text: post.body,
            })),
            page: state.page,
        }
    },
    [loadFail]: (state, action) => {
        return {
            loading: true,
            entities: [],
        }
    },
    [loadNextComplete]: (state, action) => {
        return {
            loading: false,
            entities: action.payload.map((post) => ({
                id: post.id,
                title: post.title,
                text: post.body,
            })),
            page: state.page + 1,
        }
    },
    [loadPrevComplete]: (state, action) => {
        return {
            loading: false,
            entities: action.payload.map((post) => ({
                id: post.id,
                title: post.title,
                text: post.body,
            })),
            page: state.page - 1,
        }
    },
}, initialState);