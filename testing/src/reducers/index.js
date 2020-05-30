import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import commentsReducer from 'reducers/comments';

export default combineReducers({
	comments: commentsReducer
});
