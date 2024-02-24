import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarItem {
	title: string;
	path: string;
	icon: JSX.Element;
	iconClosed?: JSX.Element;
	Subnav?: SidebarItem[];
}

export const SubMenu: React.FC<{
	item: SidebarItem;
	status: boolean;
	setActiveMenu: React.Dispatch<React.SetStateAction<number>>;
	menuNumber: number;
	handleMenu: () => void;
}> = ({ item, status, setActiveMenu, menuNumber, handleMenu }) => {
	const active = status ? 'visible' : '';
	const subnavStatus = status ? 'subnav subnav__visible' : 'subnav subnav__invisible';
	const iconStatus = status ? 'iconOpened' : 'iconClosed';
	const activeSubnav = status ? 'submenu__details' : 'invisible';

	return (
		<li className="sidebar__menuData">
			<Link to={item.path}
				onClick={() =>
					setActiveMenu(previousMenuNumber =>
						menuNumber === previousMenuNumber ? -1 : menuNumber
					)
				}
			>
			<div className={`sidebar__details ${active}`}>
				<span className='icon'>{item.icon}</span>
				<div className="sidebar__title">
					<span>{item.title}</span>
					<span className={`icon ${iconStatus}`}>
						{item.iconClosed}
					</span>
				</div>
			</div>
			</Link>

			{item.Subnav && (
				<ul className={subnavStatus} onClick={handleMenu}>
					{item.Subnav.map((subItem, index) => (
						<li className={activeSubnav} key={index}>
							<Link to={subItem.path}>
								<span>{subItem.icon}</span>
								<span>{subItem.title}</span>
							</Link>
						</li>
					))}
				</ul>	  
			)}
		</li>
	);
};
