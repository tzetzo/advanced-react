import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';

export default combineReducers({
	comments: commentsReducer,
	auth: authReducer
});
