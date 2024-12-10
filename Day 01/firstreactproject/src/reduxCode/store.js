import {configureStore} from "@reduxjs/toolkit";
import apiReducer from './api folder/apiSlice';

const store = configureStore({
    reducer:{
        api:apiReducer
    }
});

export default store;
