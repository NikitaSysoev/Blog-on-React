import {createAction} from 'redux-actions';

export const load = (dispatch) => {
    dispatch(loadStart());
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=3`)
        .then((response) => response.json())
        .then((posts) => {
                dispatch(loadComplete(posts))
            },
            () => {
                dispatch(loadFail())
            });
};

export const loadStart = createAction('[Posts] Load Start');
export const loadComplete = createAction('[Posts] Load Complete');
export const loadFail = createAction('[Posts] Load Fail');

export const loadNext = createAction('[Posts] Load Next');
export const loadPrev = createAction('[Posts] Load Prev');