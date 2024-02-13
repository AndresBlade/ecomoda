import { MdOutlineInventory2, MdKeyboardArrowDown, MdOutlineShoppingBag, MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineInbox } from "react-icons/ai";
import { HiOutlineCollection } from "react-icons/hi";
import { LuShirt } from "react-icons/lu";
import { BiCategoryAlt } from "react-icons/bi";

export const SidebarData = [
  {
    title: 'Compras',
    path: '/compras',
    icon: <MdOutlineShoppingBag size={14}/>,
    iconClosed: <MdKeyboardArrowDown size={14} />,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection size={14}/>
      }
    ]
  },
  {
    title: 'Ventas',
    path: '/ventas',
    icon: <AiOutlineInbox size={14}/>,
    iconClosed: <MdKeyboardArrowDown size={14}/>,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection size={14}/>
      }
    ]
  },
  {
    title: 'Diseño',
    path: '/diseno',
    icon: <MdOutlineDesignServices size={14}/>,
    iconClosed: <MdKeyboardArrowDown size={14}/>,
    Subnav: [
      {
        title: 'Colecciones',
        path: '/diseno/colecciones',
        icon: <HiOutlineCollection size={14}/>
      },
      {
        title: 'Prendas',
        path: '/diseno/prendas',
        icon: <LuShirt size={14}/>
      },
      {
        title: 'Materiales',
        path: '/diseno/materiales',
        icon: <MdOutlineInventory2 size={14}/>
      },
      {
        title: 'Categoría',
        path: '/diseno/categoria',
        icon: <BiCategoryAlt size={14}/>
      }
    ]
  },
  {
    title: 'Producción',
    path: '/produccion',
    icon: <AiOutlineInbox size={14}/>,
    iconClosed: <MdKeyboardArrowDown size={14}/>,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection size={14}/>
      }
    ]
  },
  {
    title: 'RRHH',
    path: '/RRHH',
    icon: <AiOutlineInbox size={14}/>,
    iconClosed: <MdKeyboardArrowDown size={14}/>,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection size={14}/>
      }
    ]
  },
  {
    title: 'Finanzas',
    path: '/finanzas',
    icon: <AiOutlineInbox size={14}/>,
    iconClosed: <MdKeyboardArrowDown size={14}/>,
    Subnav: [
      {
        title: 'Opcion',
        path: '/',
        icon: <HiOutlineCollection size={14}/>
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