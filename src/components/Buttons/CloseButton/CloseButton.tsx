import React from 'react';
import { useHistory } from 'react-router';
import './CloseButton.scss'

const CloseButton = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/stocks")
    }
    
    return(
        <button 
        className="buttons__close"
        onClick={handleClick}
        >
            戻る
        </button>
    );
}

export default CloseButton;