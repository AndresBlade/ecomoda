import React from "react";
import { Link } from "react-router-dom";

interface SidebarItem {
    title: string;
    path: string;
    icon: JSX.Element;
    iconClosed?: JSX.Element;
    iconOpened?: JSX.Element;
    Subnav?: SidebarItem[];
}

export const SubMenu: React.FC<{ item: SidebarItem }> = ({ item }) => {
    return (
        <li>
            <Link to={item.path} />
            <div>
                {item.icon}
                <span>{item.title}</span>
            </div>
        </li>
    )
}