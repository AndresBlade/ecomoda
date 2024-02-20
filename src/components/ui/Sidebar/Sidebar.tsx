import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubMenu } from './Submenu';
import { sidebarData } from './sidebarData';

export const Sidebar = () => {
	const [activeMenu, setActiveMenu] = useState(-1);
	return (
		<nav className="sidebar">
			<Link to="/" className="sidebar__logo">
				<img className="logo__img" src="./aguja_Logo.svg" alt="logo" />
				<span className="logo__name">Ecomoda</span>
			</Link>
			<ul className="sidebar__menu">
				{sidebarData.map((item, index) => (
					<SubMenu
						key={index}
						item={item}
						status={index === activeMenu}
						setActiveMenu={setActiveMenu}
						menuNumber={index}
					/>
				))}
			</ul>
			<div className="sidebar__sesionButton">
				<a className="sesionButton">Salir de sesión</a>
			</div>
		</nav>
	);
};
