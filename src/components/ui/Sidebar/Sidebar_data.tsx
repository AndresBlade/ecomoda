import { MdOutlineInventory2, MdKeyboardArrowDown , MdKeyboardArrowUp , MdOutlineShoppingBag, MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineInbox } from "react-icons/ai";
import { HiOutlineCollection } from "react-icons/hi";
import { LuShirt } from "react-icons/lu";
import { BiCategoryAlt } from "react-icons/bi";

export const SidebarData = [
  {
    title: 'Compras',
    path: '/compras',
    icon: <MdOutlineShoppingBag />,
    iconClosed: <MdKeyboardArrowDown />,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection />
      }
    ]
  },
  {
    title: 'Ventas',
    path: '/ventas',
    icon: <AiOutlineInbox />,
    iconClosed: <MdKeyboardArrowDown />,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection />
      }
    ]
  },
  {
    title: 'Diseño',
    path: '/diseno',
    icon: <MdOutlineDesignServices />,
    iconClosed: <MdKeyboardArrowDown />,
    Subnav: [
      {
        title: 'Colecciones',
        path: '/diseno/colecciones',
        icon: <HiOutlineCollection />
      },
      {
        title: 'Prendas',
        path: '/diseno/prendas',
        icon: <LuShirt />
      },
      {
        title: 'Materiales',
        path: '/diseno/materiales',
        icon: <MdOutlineInventory2 />
      },
      {
        title: 'Categoría',
        path: '/diseno/categoria',
        icon: <BiCategoryAlt />
      }
    ]
  },
  {
    title: 'Producción',
    path: '/produccion',
    icon: <AiOutlineInbox />,
    iconClosed: <MdKeyboardArrowDown />,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection />
      }
    ]
  },
  {
    title: 'RRHH',
    path: '/RRHH',
    icon: <AiOutlineInbox />,
    iconClosed: <MdKeyboardArrowDown />,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection />
      }
    ]
  },
  {
    title: 'Finanzas',
    path: '/finanzas',
    icon: <AiOutlineInbox />,
    iconClosed: <MdKeyboardArrowDown />,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection />
      }
    ]
  }
];

/* 
	children: [
			{ index: true, element: <div>Bienvenido a ecomoda</div> },
			{
				path: 'ventas',
				children: [
					{ path: 'clientes', element: <ClientsPage /> },
					{ index: true, element: <SalesPage /> },
				],
			},
*/