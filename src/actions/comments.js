import {createAction} from 'redux-actions';

export const load = () => (dispatch, getState) => {
    dispatch(loadStart());
    const state = getState();
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${state.comments.page}&_limit=6`)
        .then((response) => response.json())
        .then(
            (comments) => {
                dispatch(loadComplete(comments))
            },
            () => {
                dispatch(loadFail());
            });
};

export const loadNext = () => (dispatch, getState) => {
    dispatch(loadStart());
    const state = getState();
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${state.comments.page + 1}&_limit=6`)
        .then((response) => response.json())
        .then(
            (comments) => {
                dispatch(loadNextComplete(comments))
            },
            () => {
                dispatch(loadFail());
            });
};

export const loadPrev = () => (dispatch, getState) => {
    dispatch(loadStart());
    const state = getState();
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${state.comments.page -1}&_limit=6`)
        .then((response) => response.json())
        .then(
            (comments) => {
                dispatch(loadPrevComplete(comments))
            },
            () => {
                dispatch(loadFail());
            });
};

export const loadStart = createAction('[Comments] Load Start');
export const loadComplete = createAction('[Comments] Load Complete');
export const loadFail = createAction('[Comments] Load Fail');
export const loadNextComplete = createAction('[Comments] Load Next');
export const loadPrevComplete = createAction('[Comments] Load Prev');
