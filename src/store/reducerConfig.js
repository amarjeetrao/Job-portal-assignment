import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import JobListReducer from './reducers/JobListReducer'

const reducer = combineReducers({
	form: formReducer,
	jobList: JobListReducer
});
const store = configureStore({
	reducer
});

export default store;
