import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export const saveComment = (comment) => {
		return {
			type: SAVE_COMMENT,
			payload: comment
		};
};

export const fetchComments = () => async (dispatch, getState) => {
		const response = await axios.get('http://jsonplaceholder.typicode.com/albums')

		dispatch({
			type: FETCH_COMMENTS,
			payload: response
		});
};
