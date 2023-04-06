import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { Footer, Header } from '../ui';
import { UIContext } from '../../context';

export const Layout: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
	const { isLoading } = useContext(UIContext);

	return (
		<div className={`${isLoading ? 'hidden' : 'flex flex-col'}`}>
			<Header />
			<main className={`flex-grow`}>{children}</main>
			<Footer />
			<ToastContainer
				autoClose={3000}
				position='bottom-right'
				draggable
				pauseOnFocusLoss={false}
			/>
		</div>
	);
};
