import { createBrowserRouter } from 'react-router-dom';
import { ClientsPage, SalesPage } from './pages';
import { Loan } from './pages/finances/Loan'
import Account from './pages/finances/Account';

import { App } from './App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <div>Bienvenido a ecomoda</div> },
			{
				path: 'ventas',
				children: [
					{ path: 'clientes', element: <ClientsPage /> },
					{ index: true, element: <SalesPage /> },
				],
			},
			{ path: 'compras', element: <>En compras</> },
			{ path: 'RRHH', element: <>En RRHH</> },
			{ path: 'finanzas', 
			children:[
				{path:"loan", element:<Loan/>},
				{path: "account", element:<Account/>},
				{index: true, element:<>En finanzas</> },
				],
			},
			{ path: 'produccion', element: <>En producción</> },
			{ 
				path: 'diseno', 
				children: [
					{ path: '/diseno/materiales', element: <>En materiales</> /* <MaterialsPage /> */},
					{ index: true, element: <div>En departamento de diseno</div>},
				],
			},
		],
	},
]);
