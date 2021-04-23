import React from 'react';
import './SearchForm.scss';

const SearchForm = ({handleChange} : any) => {

    const handleSubmit = (event : any) => {
        event.preventDefault();
    }
    return(
        <form 
            className="search__form"
            onSubmit={handleSubmit}>
            <input 
                className="search__form__input" 
                type="text" 
                placeholder="商品名を検索してください"
                onChange={handleChange}
            />
            <input 
                className="search__form__btn"
                type="submit"
                value="検索"
            />
        </form>
    );
}

export default SearchForm;