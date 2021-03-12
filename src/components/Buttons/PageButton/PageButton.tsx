import React from 'react';
import { useHistory } from 'react-router';
import './PageButton.scss'

const PageButton = () => {
    const history = useHistory();

    const handleClick =() => {
        history.push("/add")
    }
    return(
        <div className="buttons">
            <button className="buttons__button">前</button>
            <button className="buttons__button">１</button>
            <button className="buttons__button">２</button>
            <button className="buttons__button">次</button>
            <div>
                <button className="buttons__add" onClick={handleClick}>登録</button>
            </div>
        </div>
    );
}

export default PageButton;