import React from 'react';
import './Header.scss';

const Header = ({title} : {title:String}) => {
    return(
        <h1 className="header__title">{title}</h1>
    );
}

export default Header;