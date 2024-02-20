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
}> = ({ item, status, setActiveMenu, menuNumber }) => {
	const active = status ? 'visible' : '';
	const activeSubnav = status ? 'submenu__details' : 'invisible';
	const currentStatus = status ? 'iconOpened' : 'iconClosed';
	const subnavStatus = status ? 'subnav subnav__visible' : 'subnav subnav__invisible';

	return (
		<li className="sidebar__menuData">
			<Link
				to={item.path}
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
						<span className={`icon ${currentStatus}`}>
							{item.iconClosed}
						</span>
					</div>
				</div>
			</Link>

			{item.Subnav && (
				<ul className={subnavStatus}>
					{item.Subnav.map((subItem, index) => (
						<li className={activeSubnav} key={index}>
							<span>{subItem.icon}</span>
							<Link to={subItem.path}>{subItem.title}</Link>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};
