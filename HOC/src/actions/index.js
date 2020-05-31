import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export const saveComment = (comment) => {
		return {
			type: SAVE_COMMENT,
			payload: comment
		};
};

// using our custom middleware!
export const fetchComments = () => {
		const response = axios.get('http://jsonplaceholder.typicode.com/albums')

		return {
			type: FETCH_COMMENTS,
			payload: response
		};
};

// using redux thunk
// export const fetchComments = () => async (dispatch, getState) => {
// 		const response = await axios.get('http://jsonplaceholder.typicode.com/albums')
//
// 		dispatch({
// 			type: FETCH_COMMENTS,
// 			payload: response
// 		});
// };


export const changeAuth = (isLoggedIn) => {
		return {
			type: CHANGE_AUTH,
			payload: isLoggedIn
		};
};
