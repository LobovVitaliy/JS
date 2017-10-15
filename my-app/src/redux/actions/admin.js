export const SET_EDITABLE = 'SET_EDITABLE';

export function setEditable(status) {
	return {
		type: SET_EDITABLE,
		editable: status
	};
}