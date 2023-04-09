import { FC } from 'react';

interface Props {
	showMenu: boolean;
	setShowMenu: (showMenu: boolean) => void;
}

export const HamburgerButton: FC<Props> = ({ showMenu, setShowMenu }) => {
	return (
		<button
			className='block sm:hidden p-2 focus:outline-none'
			onClick={() => setShowMenu(!showMenu)}
		>
			<div
				className={`w-6 h-1 rounded-full bg-black mb-1 transform transition duration-500 dark:bg-white ${
					showMenu ? 'rotate-45 translate-y-1.5' : ''
				}`}
			></div>
			<div
				className={`w-6 h-1 rounded-full bg-black mb-1 transform transition duration-500 dark:bg-white ${
					showMenu ? 'opacity-0' : ''
				}`}
			></div>
			<div
				className={`w-6 h-1 rounded-full bg-black transform transition duration-500 dark:bg-white ${
					showMenu ? '-rotate-45 -translate-y-1.5' : ''
				}`}
			></div>
		</button>
	);
};
