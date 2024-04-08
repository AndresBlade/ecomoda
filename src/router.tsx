import { createBrowserRouter } from 'react-router-dom';
import { ClientsPage, SalesPage } from './pages';
import { Loan } from './pages/finances/Loan'
import RequestType from './pages/finances/RequestType';
import Account from './pages/finances/Account';
import HistoryComponent from './pages/finances/History';
import AcceptLoan from './pages/finances/AcceptLoan';
import Main from './pages/finances/Main';
import { App } from './App';
import { MaterialsPage } from './pages/design/MaterialPage';

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
			{
				path: 'finanzas',
				children: [
					{ path: "loan", element: <Loan /> },
					{ path: "account", element: <Account /> },
					{ path: "History", element: <HistoryComponent />},
					{ path: "requestType", element: <RequestType />},
					{path: "acceptLoan", element: <AcceptLoan />},
					{path: "main", element: <Main/>},
					{ index: true, element: <>En finanzas</> },

				],
			},
			{ path: 'produccion', element: <>En producción</> },
			{
				path: 'diseno',
				children: [
					{ path: '/diseno/materiales', element: <>En materiales</> /* <MaterialsPage /> */ },
					{ index: true, element: <div>En departamento de diseno</div> },
				],
			},
		],
	},
]);
