import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';

const Home = () => {
    const icons = [
        { name: "在庫管理", path: "/stocks", icon: "icon-box-icon fa fa-list" },
        { name: "受注管理", path: "/orders", icon: "icon-box-icon fa fa-clipboard"},
      ];

    return(
        <div className="container">
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

export default Home;