import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBarMenu from './SideBarMenu';

const menus = [
    { name: "ホーム", path: "/" , icon: "sidemenu-icon fa fa-home" },
    { name: "在庫管理", path: "/stocks", icon: "sidemenu-icon fa fa-list" },
    { name: "受注管理", path: "/orders", icon: "sidemenu-icon fa fa-clipboard"}
];

const SideBar = () => {
    const [showMenu , setShowMenu] = useState(true);
    
    return(
        <>
            <ul className="sidebar">
            <h1 className="sidemenu-header">
                <i
                className="sidebar-togglebtn fa fa-bars"
                onClick={() => setShowMenu(!showMenu)}
                >
                </i>
                ABCProduct
            </h1>
                {showMenu ? 
                menus.map((menu, index) => {
                    return (
                        <Link to={menu.path} key={index}>
                            <SideBarMenu menu={menu}/>
                        </Link>
                    );
                })
                : ''
                }
        </ul>
        </>
    );
}

export default SideBar;