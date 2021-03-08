import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const menus = [
    { name: "ホーム", path: "/" , icon: "sidemenu-icon fa fa-home" },
    { name: "在庫管理", path: "/stocks", icon: "sidemenu-icon fa fa-list" },
    { name: "受注管理", path: "/orders", icon: "sidemenu-icon fa fa-clipboard"}
  ];

const SideBar = () => {
    
    return(
        <>
            <ul className="sidebar">
            <h1 className="sidemenu-header">
                <i
                className="sidebar-togglebtn fa fa-bars"
                >
                </i>
                ABCProduct
            </h1>
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <SidebarItem menu={menu}/>
                    </Link>
                );
            })}
        </ul>
        </>
    );
}

export default SideBar;