import React, { useState } from "react";
import SideBarMenu from './SideBarMenu';
import './SideBar.scss';

const menus = [
    { name: "ホーム", path: "/" , icon: "sidemenu-icon fa fa-home" },
    { name: "在庫管理", path: "/stocks", icon: "sidemenu-icon fa fa-list" },
    { name: "受注管理", path: "/orders", icon: "sidemenu-icon fa fa-clipboard"},
];

const SideBar = () => {
    const [showLi, setShowLi] = useState(true);
    
    const toggleNav = () => {
        setShowLi(!showLi);
    };
    return(
        <ul className="sidebar">
            <h1 className="sidebar__header">
                <i
                className="sidebar__togglebtn fa fa-bars"
                onClick={toggleNav}
                >
                </i>
                ABCProduct
            </h1>
                {showLi 
                    ? menus.map((menu, index) => {
                    return (
                        <SideBarMenu menu={menu} key={index}/>
                    )})
                    : ''
                } 
        </ul>
    );
}

export default SideBar;
