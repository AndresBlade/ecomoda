import React from 'react';
import { Link } from 'react-router-dom';
import { SubMenu } from "./Submenu";
import { SidebarData } from './Sidebar_data';

export const Sidebar = () => {
  return (
	<nav className='sidebar'>
		<Link to="/" className='sidebar__logo'>
			<img className='logo' src="./aguja_Logo.svg" alt="logo" />
			<span className="header__name">Ecomoda</span>
		</Link>
		<ul className='sidebar__menu'>
			{SidebarData.map((item, index) => (
				<SubMenu key={index} item={item} />
			))}
		</ul>
		<div className='sidebar__sesionButton'>
			<a className='sesionButton'>Salir de sesión</a>
		</div>
	</nav>
  );
};
