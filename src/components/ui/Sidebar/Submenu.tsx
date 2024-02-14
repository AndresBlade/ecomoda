import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SidebarItem {
    title: string;
    path: string;
    icon: JSX.Element;
    iconClosed?: JSX.Element;
    Subnav?: SidebarItem[];
}

export const SubMenu: React.FC<{ item: SidebarItem }> = ({ item }) => { 
  const [status, setStatus] = useState(Boolean)

  const handleStatus = () => {
    setStatus(!status)
}

const active = status ? 'visible' : ''
const currentStatus = status 
? 'iconOpened' 
: 'iconClosed'
const subnavStatus = status 
? 'visible__subnav' 
: 'invisible'

return (
  <li className="sidebar__menuData">
    <Link to={item.path} onClick={handleStatus}>
      <div className={`sidebar__details ${active}`}>
          <span>{item.icon}</span>
        <div className="sidebar__title">
          <span>{item.title}</span>
          <span className={`icon ${currentStatus}`}>{item.iconClosed}</span>
        </div>
      </div>
    </Link>

    {item.Subnav && (
      <ul className={subnavStatus}>
        {item.Subnav.map((subItem, index) => (
          <li className="submenu__details" key={index}>
            <span>{subItem.icon}</span>
            <Link to={subItem.path}>{subItem.title}</Link>
          </li>
        ))}
      </ul>
    )}
</li>
);
};