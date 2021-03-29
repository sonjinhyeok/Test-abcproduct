import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import styled　from 'styled-components';
import './SideBar.scss';

type MenuProps = {
    showMenu?: boolean
}

type Menu = {
    id : number
    name : string
    path : string
    iconClassName: string
}

const SideBarMenu = styled.li<MenuProps>`
    padding: 15px 30px;
    margin-top: 10px;
    text-align: center;
    font-size: 1.5rem;
    color: white;

    :hover {
        background-color: darkorange;
        transform: scale(1.01);
    }
    span {
        margin-left: 0.5rem;
    }

    @media (max-width: 768px) {
        display: ${({ showMenu }) => showMenu ? 'block' : 'none' }
    }
`;

const SideBar = () => {
    const menus: Menu[] = [
        {id: 1, name: 'ホーム' , path: '/', iconClassName: 'fa fa-home'},
        {id: 2, name: '在庫管理' , path: '/stock', iconClassName: 'fa fa-list'},
        {id: 3, name: '受注管理' , path: '/order', iconClassName: 'fa fa-clipboard'}
    ];

    const [showMenu, setShowMenu] = useState(false);

    return(
        <ul className="sidebar">
            <h1 className="sidebar__header">
                <i
                className="sidebar__togglebtn fa fa-bars"
                onClick={()=> setShowMenu(!showMenu)}>
                </i>
                ABCProduct
            </h1>
            { menus.map(( menu ) => (
                <NavLink to={menu.path} >
                    <SideBarMenu showMenu={ showMenu } key={menu.id} >
                        <i className={menu.iconClassName}></i>
                        <span>{menu.name}</span>
                    </SideBarMenu>
                </NavLink>
            ))}
        </ul>
    );
}


export default SideBar;
