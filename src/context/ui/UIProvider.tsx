import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
	isOpen: boolean;
	isLoading: boolean;
	theme: 'light' | 'dark';
}
const UI_Initial_State: UIState = { isOpen: false, isLoading: true, theme: 'light' };

export const UIProvider: FC<React.PropsWithChildren> = ({ children }) => {
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

	const toggleTheme = () => {
		dispatch({ type: '[Theme] - Toggle' });
	};

	const setTheme = (theme: 'light' | 'dark') => {
		dispatch({ type: '[Theme] - Set', payload: theme });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				// Metodos
				openModal,
				closeModal,
				completeLoading,
				toggleTheme,
				setTheme,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
