import React from 'react';
import { Link } from 'react-router-dom';
import './AddButton.scss';

const AddButton = () => {
    return(
        <Link to="/add">
            <button className="add__button">登録</button>
        </Link>
    );
}

export default AddButton;