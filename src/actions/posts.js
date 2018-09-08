import {createAction} from 'redux-actions';

export const load = () => (dispatch, getState) => {
    dispatch(loadStart());
    const state = getState();
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${state.posts.page}&_limit=3`)
        .then((response) => response.json())
        .then((posts) => {
                dispatch(loadComplete(posts))
            },
            () => {
                dispatch(loadFail())
            });
};

export const loadNext = () => (dispatch, getState) => {
    dispatch(loadStart());
    const state = getState();
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${state.posts.page + 1}&_limit=3`)
        .then((response) => response.json())
        .then((posts) => {
                dispatch(loadNextComplete(posts))
            },
            () => {
                dispatch(loadFail())
            });
};

export const loadPrev = () => (dispatch, getState) => {
    dispatch(loadStart());
    const state = getState();
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${state.posts.page - 1}&_limit=3`)
        .then((response) => response.json())
        .then((posts) => {
                dispatch(loadPrevComplete(posts))
            },
            () => {
                dispatch(loadFail())
            });
};

export const loadStart = createAction('[Posts] Load Start');
export const loadComplete = createAction('[Posts] Load Complete');
export const loadFail = createAction('[Posts] Load Fail');

export const loadNextComplete = createAction('[Posts] Load Next');
export const loadPrevComplete = createAction('[Posts] Load Prev');

