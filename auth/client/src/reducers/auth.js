import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
	authenticated: '',  // saves the returned JWT
  errorMessage: ''    // saves errors returned by the Express API
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: action.payload };
		case AUTH_ERROR:
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};
