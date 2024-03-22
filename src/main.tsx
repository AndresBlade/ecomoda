import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/normalize.css';
import './assets/global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { RefreshProvider } from './pages/design/context/refresh.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RefreshProvider>
			<RouterProvider router={router} />
		</RefreshProvider>
	</React.StrictMode>
);
