import {handleActions} from 'redux-actions';
import {loadStart, loadComplete, loadFail, reverseList} from "actions/users";

const initialState = {
    loading: true,
    entities: [],
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
            entities: action.payload,
        }
    },
    [loadFail]: (state, action) => {
        return {
            loading: true,
            entities: [],
        }
    },
    [reverseList]: (state, action) => {
        state.entities.reverse();
        return {
            entities: Object.create(state.entities),
        }
    }
}, initialState);