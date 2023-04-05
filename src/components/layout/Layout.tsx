import { ToastContainer } from 'react-toastify';
import { Footer, Header } from '../ui';

export const Layout: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className={`flex flex-col`}>
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
