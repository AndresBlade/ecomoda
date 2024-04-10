import { createBrowserRouter } from 'react-router-dom';
import { ClientsPage, POSPage } from './pages';
import { Loan } from './pages/finances/Loan'
import RequestType from './pages/finances/RequestType';
import Account from './pages/finances/Account';
import HistoryComponent from './pages/finances/History';
import AcceptLoan from './pages/finances/AcceptLoan';
import Main from './pages/finances/Main';
import { App } from './App';
import { MaterialsPage, CollectionsPage, GarmentsPage, SizePage, CategoriesPage, DesignPage, CollectionsDetails, GarmentDetails } from './pages';
import { GarmentDataProvider } from './pages/design/context/garmentProps';
import { getAllPOS } from './pages/sales/POS/helpers/getAllPOS';
import { createPOS } from './pages/sales/POS/helpers/createPOS';
import { updatePOS } from './pages/sales/POS/helpers/updatePOS';
import { deletePOS } from './pages/sales/POS/helpers/deletePOS';
import { createClient } from './pages/sales/clients/helpers/createClient';
import { Client } from './pages/sales/clients/interfaces/Client';
import { updateClient } from './pages/sales/clients/helpers/updateClient';
import { getAllClients } from './pages/sales/clients/helpers/getAllClients';
import { deleteClient } from './pages/sales/clients/helpers/deleteClient';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <div>Bienvenido a ecomoda</div> },
			{
				path: 'ventas',
				children: [
					{
						path: 'clientes',
						element: <ClientsPage />,
						loader: async () => {
							const clientsWrapper = await getAllClients();

							return clientsWrapper;
						},
						action: async ({ request }) => {
							const formData = await request.formData();

							const id = +(formData.get('id') as string);
							const name = formData.get('name') as string;
							const client: Client = { id, name };

							console.log(client);

							if (request.method === 'POST')
								return await createClient(client);

							if (request.method === 'PUT')
								return await updateClient(client);

							return await deleteClient(id);
						},
					},
					{
						path: 'POS',
						element: <POSPage />,
						loader: async () => {
							const POSWrapper = await getAllPOS();

							return POSWrapper;
						},
						action: async ({ request }) => {
							const formData = await request.formData();

							const id = +(formData.get('id') as string);
							const name = formData.get('name') as string;

							if (request.method === 'POST')
								return await createPOS(name);

							if (request.method === 'PUT')
								return await updatePOS({
									name,
									id,
								});

							return await deletePOS(id);
						},
					},
				],
			},
			{ path: 'compras', element: <>En compras</> },
			{ path: 'RRHH', element: <>En RRHH</> },
			{ path: 'finanzas', children: [
				{ path: "loan", element: <Loan /> },
				{ path: "account", element: <Account /> },
				{ path: "History", element: <HistoryComponent />},
				{ path: "requestType", element: <RequestType />},
				{path: "acceptLoan", element: <AcceptLoan />},
				{path: "main", element: <Main/>},
				{ index: true, element: <>En finanzas</> },

			], },
			{ path: 'produccion', element: <>En producción</> },
			{
				path: 'diseno',
				children: [
					{ path: '/diseno/colecciones', element: <CollectionsPage />},
					{ path: '/diseno/colecciones/:collectionId', element: <CollectionsDetails />},
					{ path: '/diseno/prendas', element: <GarmentDataProvider> <GarmentsPage /> </GarmentDataProvider>},
					{ path: '/diseno/materiales', element: <MaterialsPage /> },
					{ path: '/diseno/prendas/:idgarment', element: <GarmentDataProvider><GarmentDetails /></GarmentDataProvider> },
					{ path: '/diseno/categorias', element: <CategoriesPage /> },
					{ path: '/diseno/tallas', element: <SizePage /> },
					{
						index: true,
						element:  <DesignPage />,
					},
				],
			},
		],
	},
]);
