import React from 'react';
import './SideBar.scss';

const SideBarMenu = ({ menu }: {menu: any}) => {
    return(
        <li className="sidebar__menu">
            <i className={menu.icon}></i>
            <span className="sidebar__text">{menu.name}</span>
        </li>
    );
}

export default SideBarMenu;