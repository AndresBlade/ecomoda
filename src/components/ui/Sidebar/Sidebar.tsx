import React from 'react';
import { Link } from 'react-router-dom';
import { SubMenu } from "./Submenu";
import { SidebarData } from './Sidebar_data';

export const Sidebar = () => {
  return (
	<nav className='sidebar'>
		<div className='sidebar__logo'>
			<Link to="/" className="header__name">
				Ecomoda
			</Link>
		</div>
		<ul className='sidebar__menu'>
			{SidebarData.map((item, index) => (
				<SubMenu key={index} item={item} />
			))}
		</ul>
		<div className='sidebar__sesionButton'>
			<button className='sesionButton'>Salir de sesión</button>
		</div>
	</nav>
  );
};
