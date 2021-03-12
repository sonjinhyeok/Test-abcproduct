import React from 'react';
import './CloseButton.scss'
import { Link } from 'react-router-dom';
const CloseButton = () => {
    return(
        <Link to="/stocks">
            <button className="buttons__close">戻る</button>
        </Link>
    );
}

export default CloseButton;