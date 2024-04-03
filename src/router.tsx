import { createBrowserRouter } from 'react-router-dom';
import { ClientsPage, POSPage } from './pages';
import { App } from './App';
import { MaterialsPage, CollectionsPage, GarmentsPage, SizePage, CategoriesPage, DesignPage } from './pages';
import { getAllPOS } from './pages/sales/POS/helpers/getAllPOS';
import { createPOS } from './pages/sales/POS/helpers/createPOS';
import { updatePOS } from './pages/sales/POS/helpers/updatePOS';
import { deletePOS } from './pages/sales/POS/helpers/deletePOS';
//esto aqui no funciona :)
import InvoiceDescription from './pages/purchases/InvoiceDescription';
import InvoiceTotal from './pages/purchases/InvoiceTotal';
import InvoiceFooter from './pages/purchases/InvoiceFooter';


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
			{ path: 'compras', children: [{path:"comprar", element:<h1>elemento</h1>}], element: <>En compras</> },
			//esto aqui no funciona
			{ path: '/invoice-description', element: <InvoiceDescription /> },
			{ path: '/invoice-total', element: <InvoiceTotal /> },
			{ path: '/invoice-footer', element: <InvoiceFooter /> },


			{ path: 'RRHH', element: <>En RRHH</> },
			{ path: 'finanzas', element: <>En finanzas</> },
			{ path: 'produccion', element: <>En producción</> },
			{
				path: 'diseno',
				children: [
					{ path: '/diseno/colecciones', element: <CollectionsPage /> },
					{ path: '/diseno/prendas', element: <GarmentsPage /> },
					{ path: '/diseno/materiales', element: <MaterialsPage /> },
					{ path: '/diseno/categorias', element: <CategoriesPage /> },
					{ path: '/diseno/tallas', element: <SizePage /> },
					{ index: true, element: <div>En departamento de diseno</div>},
					{
						index: true,
						element:  <DesignPage />,
					},
				],
			},
		],
	},
]);
