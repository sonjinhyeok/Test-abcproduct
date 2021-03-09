import React from 'react';

const Form = () => {
    return(
        <form className="search-form">
            <input 
            className="search-form-input" 
            type="text"
            placeholder="キーワードを入力してください。"
            />
            <button className="search-form-btn">検索</button>
        </form>
    );
}

export default Form;