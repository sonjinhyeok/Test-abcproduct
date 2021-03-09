import React from 'react';

const SideBarMenu = ({ menu }: {menu: any}) => {
    return(
        <li className="sidebar-menu">
            <i className={menu.icon}></i>
            <span className="sidebar-text">{menu.name}</span>
        </li>
    );
}

export default SideBarMenu;