import { SET_EDITABLE } from '../actions/admin';

const defaultState = {
	editable: false
};

function reducer(state = defaultState, action) {
	switch (action.type) {
		case SET_EDITABLE:
			return Object.assign({}, state, {
				editable: action.editable
			});
		default:
			return state;
	}
}

export default reducer;