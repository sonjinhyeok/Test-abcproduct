import React from 'react';
import CloseButton from '../CloseButton/CloseButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import './DeleteAndCloseButton.scss';

const DeleteAndCloseButton = () => {
    return(
        <div className="buttons">
            <div className="buttons__button">
                <DeleteButton />
            </div>
            <div className="buttons__button">
                <CloseButton />
            </div>
        </div>
    );
}
export default DeleteAndCloseButton;