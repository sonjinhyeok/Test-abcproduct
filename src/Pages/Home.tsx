import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Icon from '../components/Icon';


const Main = () => {
    const icons = [
        { name: "在庫管理", path: "/stocks", icon: "icon-box-icon fa fa-list" },
        { name: "受注管理", path: "/orders", icon: "icon-box-icon fa fa-clipboard"},
      ];

    return(
        <div className="container">
            <Header />
            {icons.map((icon, index) => {
                return (
                    <Link to={icon.path} key={index}>
                        <Icon icon={icon}/>
                    </Link>
                );
             })}
        </div>
    );
}

export default Main;