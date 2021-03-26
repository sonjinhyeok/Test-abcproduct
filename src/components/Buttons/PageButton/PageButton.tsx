import React from 'react';
import { Link } from 'react-router-dom';
import './PageButton.scss'

const PageButton = () => {
    return(
        <div className="buttons">
            <button className="buttons__button">前</button>
            <button className="buttons__button">１</button>
            <button className="buttons__button">２</button>
            <button className="buttons__button">次</button>
            <div>
                <Link to="/stock/add">
                    <button className="buttons__add">登録</button>
                </Link>
            </div>
        </div>
    );
}

export default PageButton;