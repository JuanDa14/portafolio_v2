import { createContext } from 'react';

export interface UIProps {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	isLoading: boolean;
	completeLoading: () => void;
	theme: 'light' | 'dark';
	toggleTheme: () => void;
	setTheme: (theme: 'light' | 'dark') => void;
}
export const UIContext = createContext({} as UIProps);
