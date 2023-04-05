import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
	isOpen: boolean;
}
const UI_Initial_State: UIState = { isOpen: false };

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

	return (
		<UIContext.Provider
			value={{
				...state,
				// Metodos
				openModal,
				closeModal,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
