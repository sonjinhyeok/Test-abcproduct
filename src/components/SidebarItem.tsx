import React from 'react';

const SidebarItem = ({ menu }: {menu: any}) => {
    return(
        <li className="sidebarItem">
            <i className={menu.icon}></i>
            <span className="sidebar-text">{menu.name}</span>
        </li>
    );
}

export default SidebarItem;