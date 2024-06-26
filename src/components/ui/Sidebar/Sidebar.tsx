import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubMenu } from './Submenu';
import { sidebarData } from './sidebarData';
import { IoIosArrowRoundBack } from "react-icons/io";
import logoEcomoda from '../../../assets/aguja_Logo.svg';

interface SidebarProps {
    handleMenu: () => void;
    openedMenu: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({handleMenu, openedMenu}) => {
	const [activeMenu, setActiveMenu] = useState(-1);
	
	const visibleMenu = openedMenu ? 'closed' : '';

	return (
		<nav className={`sidebar ${visibleMenu}`}>
			<header className='sidebar__header'>
				<Link to="/" className="sidebar__logo" onClick={handleMenu}>
					<img className="logo__img" src={logoEcomoda} alt="logo" />
					<span className="logo__name">Ecomoda</span>
				</Link>
				<span className='sidebar__closeTag' onClick={handleMenu}>
					<IoIosArrowRoundBack size={25} color='#fff'/>
				</span>
			</header>
			<ul className="sidebar__menu">
				{sidebarData.map((item, index) => (
					<SubMenu
						key={index}
						item={item}
						status={index === activeMenu}
						setActiveMenu={setActiveMenu}
						menuNumber={index}
						handleMenu={handleMenu}
					/>
				))}
			</ul>
			<div className="sidebar__sesionButton">
				<a className="sesionButton">Salir de sesión</a>
			</div>
		</nav>
	);
};
