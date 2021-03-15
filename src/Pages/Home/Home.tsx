import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';

type Icons = {
    id : number
    name : string
    path : string
    icon: string
}

const Home = () => {

    const icons:Icons[] = [
        { id: 1, name: "在庫管理", path: "/stocks", icon: "icon-box-icon fa fa-list" },
        { id: 2, name: "受注管理", path: "/orders", icon: "icon-box-icon fa fa-clipboard"},
    ];

    return(
        <div className="container">
            {icons.map((icon) => {
                return (
                    <Link to={icon.path} key={icon.id}>
                        <Icon icon={icon}/>
                    </Link>
                );
            })}
        </div>
    );
}

export default Home;