import React from 'react';
import './DeleteAndCloseButton.scss';

const DeleteAndCLoseButton = () => {
    return(
        <div className="buttons">
            <div className="buttons__button">
                <button className="buttons__button__delete">削除</button>
            </div>
            <div className="buttons__button">
                <button className="buttons__button__close">閉じる</button>
            </div>
        </div>
    );
}
export default DeleteAndCLoseButton;