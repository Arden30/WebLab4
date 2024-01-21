import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        token: 'tok',
        hits: [],
        r: 1,
        auth: false
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            sessionStorage.setItem('authToken', action.payload);
        },
        clearToken: (state) => {
            state.token = '';
        },
        addHit: (state, action) => {
            state.hits.push(action.payload);
        },
        clearHits: (state) => {
            state.hits = [];
        },
        changeR: (state, action) => {
            state.r = parseFloat(action.payload);
        },
        authorize: (state) => {
            state.auth = true;
        },
        logOut: (state) => {
            state.auth = false;
            sessionStorage.removeItem('authToken');
        },
    },
});

export const {
    setToken,
    clearToken,
    addHit,
    clearHits,
    changeR,
    authorize,
    logOut,
} = tokenSlice.actions;

export default tokenSlice.reducer;
