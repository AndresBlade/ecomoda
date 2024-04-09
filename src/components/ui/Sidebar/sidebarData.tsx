import {
	MdOutlineInventory2,
	MdKeyboardArrowDown,
	MdOutlineShoppingBag,
	MdOutlineDesignServices,
} from 'react-icons/md';
import { AiOutlineInbox } from 'react-icons/ai';
import { HiOutlineCollection, HiUser } from 'react-icons/hi';
import { LuShirt } from 'react-icons/lu';
import { BiCategoryAlt } from 'react-icons/bi';

export const sidebarData = [
	{
		title: 'Compras',
		path: '/compras',
		icon: <MdOutlineShoppingBag size={20} />,
		iconClosed: <MdKeyboardArrowDown size={20} />,
		Subnav: [
			{
				title: 'Opcion',
				path: '/',
				icon: <HiOutlineCollection size={20} />,
			},
		],
	},
	{
		title: 'Ventas',
		path: '/ventas',
		icon: <AiOutlineInbox size={20} />,
		iconClosed: <MdKeyboardArrowDown size={20} />,
		Subnav: [
			{
				title: 'POS',
				path: '/ventas/POS',
				icon: <HiOutlineCollection size={20} />,
			},
			{ title: 'Cliente', path: '/ventas/clientes', icon: <HiUser /> },
		],
	},
	{
		title: 'Diseño',
		path: '/diseno',
		icon: <MdOutlineDesignServices size={20} />,
		iconClosed: <MdKeyboardArrowDown size={20} />,
		Subnav: [
			{
				title: 'Colecciones',
				path: '/diseno/colecciones',
				icon: <HiOutlineCollection size={20} />,
			},
			{
				title: 'Prendas',
				path: '/diseno/prendas',
				icon: <LuShirt size={20} />,
			},
			{
				title: 'Materiales',
				path: '/diseno/materiales',
				icon: <MdOutlineInventory2 size={20} />,
			},
			{
				title: 'Categoría',
				path: '/diseno/categoria',
				icon: <BiCategoryAlt size={20} />,
			},
		],
	},
	{
		title: 'Producción',
		path: '/produccion',
		icon: <AiOutlineInbox size={20} />,
		iconClosed: <MdKeyboardArrowDown size={20} />,
		Subnav: [
			{
				title: 'Opcion',
				path: '/',
				icon: <HiOutlineCollection size={20} />,
			},
		],
	},
	{
		title: 'RRHH',
		path: '/RRHH',
		icon: <AiOutlineInbox size={20} />,
		iconClosed: <MdKeyboardArrowDown size={20} />,
		Subnav: [
			{
				title: 'Opcion',
				path: '/',
				icon: <HiOutlineCollection size={20} />,
			},
		],
	},
	{
		title: 'Finanzas',
		path: '/finanzas',
		icon: <AiOutlineInbox size={20} />,
		iconClosed: <MdKeyboardArrowDown size={20} />,
		Subnav: [
			{
				title: 'Opcion',
				path: '/',
				icon: <HiOutlineCollection size={20} />,
			},
		],
	},
];
