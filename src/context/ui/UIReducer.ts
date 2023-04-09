import { UIState } from './';

type UIActionType =
	| { type: '[Modal] - Open' }
	| { type: '[Modal] - Close' }
	| { type: '[Loading] - Complete' }
	| { type: '[Theme] - Toggle' }
	| { type: '[Theme] - Set'; payload: 'light' | 'dark' };

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

		case '[Theme] - Toggle':
			return {
				...state,
				theme: state.theme === 'light' ? 'dark' : 'light',
			};

		case '[Theme] - Set':
			return {
				...state,
				theme: action.payload,
			};

		default:
			return state;
	}
};
