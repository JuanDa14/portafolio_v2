import { createContext } from 'react';

export interface UIProps {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	isLoading: boolean;
	completeLoading: () => void;
}
export const UIContext = createContext({} as UIProps);
