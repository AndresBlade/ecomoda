import React from "react";
import { Link } from "react-router-dom";

interface SidebarItem {
    title: string;
    path: string;
    icon: JSX.Element;
    iconClosed?: JSX.Element;
    Subnav?: SidebarItem[];
}
export const SubMenu: React.FC<{ item: SidebarItem }> = ({ item }) => {
    return (
      <li className="sidebar__menuData">
        <Link to={item.path}>
          <div className="sidebar__details">
            {item.icon}
            <span>{item.title}</span>
            {item.iconClosed}
          </div>
        </Link>

        {item.Subnav && (
          <ul className="sub-menu">
            {item.Subnav.map((subItem, index) => (
              <li key={index}>
                <Link to={subItem.path}>{subItem.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };