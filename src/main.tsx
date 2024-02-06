import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/normalize.css';
import './assets/global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
