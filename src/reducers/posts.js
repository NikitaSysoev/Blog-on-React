import {handleActions} from 'redux-actions';
import {loadStart, loadComplete, loadFail, loadNext} from "actions/posts";

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
    [loadNext]: (state, action) => {
        return {
            loading: false,
            page: 2,
        }
    }
}, initialState);