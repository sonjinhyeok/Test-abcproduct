import React from 'react';
import AddButton from './AddButton';

const PageButton = () => {
    return(
        <div className="page-buttons-container">
            <div className="page-buttons">
                <button className="page-button prev">前</button>
            </div>
            <div className="page-buttons">
                <button className="page-button number">１</button>
            </div>
            <div className="page-buttons">
                <button className="page-button number">２</button>
            </div>
            <div className="page-buttons">
                <button className="page-button next">次</button>
            </div>
            <div className="page-buttons">
                <AddButton />
            </div>
        </div>
    );
}

export default PageButton;