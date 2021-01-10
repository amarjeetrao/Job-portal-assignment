import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
	loading: false,
	hasErrors: false,
	jobList: []
};

const jobListSlice = createSlice({
	name: 'jobList',
	initialState,
	reducers: {
		getjobList: state => {
			state.loading = true;
		},
		getjobListSuccess: (state, {payload}) => {
			state.jobList = payload;
			state.loading = false;
			state.hasErrors = false;
		},
		getjobListFailure: state => {
			state.loading = false;
			state.hasErrors = true;
		}
	}
});

// The reducer
export default jobListSlice.reducer;

// The actions
export const {
			getjobList,
			getjobListSuccess,
			getjobListFailure
		} = jobListSlice.actions;

// The selector
export const jobListSelector = state => state.jobList;

// The data Fetcher
export function fetchJobList() {
	return async dispatch => {
		dispatch(getjobList());

		try {
			const response = await fetch('http://localhost:3001/jobs');
			const data = await response.json();

			dispatch(getjobListSuccess(data));
		} catch (error) {
			dispatch(getjobListFailure());
		}
	};
}
