import { NavLink } from "react-router-dom";
import React,{ useState } from 'react';
import './SideBar.scss';

const SideBarMenu = ({ menu }: {menu: any}) => {
    const [liColor , setLiColor] = useState(false);

    const liClick = () =>{
        setLiColor(!liColor);
    }

    return(
        <NavLink to={ menu.path }>
            <li 
            className="sidebar__menu" 
            onClick={liClick}
            >
                <i className={menu.icon}></i>
                <span className="sidebar__text">{menu.name}</span>
            </li>
        </NavLink>
    );
}

export default SideBarMenu;