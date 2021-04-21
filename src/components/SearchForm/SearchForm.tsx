import React from 'react';
import './SearchForm.scss';

const Form = () => {
    return(
        <form className="search__form">
            <input className="search__form__input" type="text" placeholder="キーワードを入力してください。"/>
            <button className="search__form__btn">検索</button>
        </form>
    );
}

export default Form;