import React from 'react';
import { Link } from 'react-router-dom';
import './PageButton.scss'

const PageButton = () => {
    return(
        <div className="buttons__container">
            <div className="buttons__container__buttons">
                <button className="buttons__container__button">前</button>
            </div>
            <div className="buttons__container__buttons">
                <button className="buttons__container__button">１</button>
            </div>
            <div className="buttons__container__buttons">
                <button className="buttons__container__button">２</button>
            </div>
            <div className="buttons__container__buttons">
                <button className="buttons__container__button">次</button>
            </div>
            <div className="buttons__container__buttons">
                <Link to='/add'>
                    <button className="buttons__container__add">登録</button>
                </Link>
            </div>
        </div>
    );
}

export default PageButton;