import { UIState } from './';

type UIActionType =
	| { type: '[Modal] - Open' }
	| { type: '[Modal] - Close' }
	| { type: '[Loading] - Complete' };

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
	switch (action.type) {
		case '[Modal] - Open':
			return {
				...state,
				isOpen: true,
			};

		case '[Modal] - Close':
			return {
				...state,
				isOpen: false,
			};

		case '[Loading] - Complete':
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};
