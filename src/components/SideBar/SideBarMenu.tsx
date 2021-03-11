import { NavLink } from "react-router-dom";
import './SideBar.scss';

const SideBarMenu = ({ menu }: {menu: any}) => {
    
    return(
        <NavLink to={ menu.path } activeClassName="active">
            <li className="sidebar__menu">
                <i className={menu.icon}></i>
                <span className="sidebar__text">{menu.name}</span>
            </li>
        </NavLink>
    );
}

export default SideBarMenu;