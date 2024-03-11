import { createBrowserRouter } from 'react-router-dom';
import { ClientsPage, POSPage } from './pages';
import { App } from './App';
import { getAllPOS } from './pages/sales/POS/helpers/getAllPOS';
import { createPOS } from './pages/sales/POS/helpers/createPOS';

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
					{
						path: 'POS',
						element: <POSPage />,
						loader: async () => {
							const POSWrapper = await getAllPOS();

							return POSWrapper;
						},
						action: async ({ request }) => {
							const formData = await request.formData();

							const name = formData.get('name') as string;

							console.log(await createPOS(name));

							return request;
						},
					},
				],
			},
			{ path: 'compras', element: <>En compras</> },
			{ path: 'RRHH', element: <>En RRHH</> },
			{ path: 'finanzas', element: <>En finanzas</> },
			{ path: 'produccion', element: <>En producción</> },
			{
				path: 'diseno',
				children: [
					{
						path: '/diseno/materiales',
						element: <>En materiales</> /* <MaterialsPage /> */,
					},
					{
						index: true,
						element: <div>En departamento de diseno</div>,
					},
				],
			},
		],
	},
]);
