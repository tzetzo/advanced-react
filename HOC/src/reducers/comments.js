import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case SAVE_COMMENT:
			return [ ...state, action.payload ];
		case FETCH_COMMENTS:
			const titles = action.payload.data.map(album => album.title);
			return [...state, ...titles];
		default:
			return state;
	}
};
