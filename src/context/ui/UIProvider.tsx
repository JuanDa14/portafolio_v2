import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
	isOpen: boolean;
	isLoading: boolean;
}
const UI_Initial_State: UIState = { isOpen: false, isLoading: true };

interface Props {
	children: JSX.Element;
}

export const UIProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(UIReducer, UI_Initial_State);

	const openModal = () => {
		dispatch({ type: '[Modal] - Open' });
	};

	const closeModal = () => {
		dispatch({ type: '[Modal] - Close' });
	};

	const completeLoading = () => {
		dispatch({ type: '[Loading] - Complete' });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				// Metodos
				openModal,
				closeModal,
				completeLoading,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
