import React from 'react';
import { useHistory } from 'react-router';
import './PageButton.scss'

const PageButton = () => {
    const history = useHistory();

    const handleClick =() => {
        history.push("/add")
    }
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
        
            <button 
                className="buttons__container__add"
                onClick={handleClick}
            >
                登録
            </button>
            </div>
        </div>
    );
}

export default PageButton;