import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { UIProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<UIProvider>
			<App />
		</UIProvider>
	</React.StrictMode>
);
