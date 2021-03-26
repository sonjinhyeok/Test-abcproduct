import React from 'react';
import { useHistory } from 'react-router';
import './CloseButton.scss'

const CloseButton = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/stock")
    }
    return(
        <button 
        className="close__button"
        onClick={handleClick}
        >
            戻る
        </button>
    );
}

export default CloseButton;