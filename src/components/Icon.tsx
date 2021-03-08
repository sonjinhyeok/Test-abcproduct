import React from 'react';
import { Link } from "react-router-dom";

const MainIcon = ({ icon }: {icon: any}) => {
    return(
        <div className="icon-boxs">
            <div className="icon-box">
                <div className="icon-box-icon">
                    <i className={icon.icon}></i>
                </div>
            <div className="icon-box-name">
                {icon.name}
            </div>
        </div>
        </div>
    );
}

export default MainIcon;