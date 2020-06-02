import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth';

//import authReducer from './authReducer';

export default combineReducers({
	auth,
	form: formReducer
});
