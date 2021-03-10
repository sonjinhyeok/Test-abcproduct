import React from 'react';
import './Icon.scss';

const Icon = ({ icon }: {icon: any}) => {
    return(
        <div className="icon">
            <div className="icon__icon">
                <i className={icon.icon}></i>
            </div>
            <div className="icon__name">
                {icon.name}
            </div>
        </div>
    );
}

export default Icon;