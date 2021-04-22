import PageButton from '../../components/PageButton/PageButton';
import ItemTable from '../../components/Tables/ItemTable/ItemTable';
import SearchForm from '../../components/SearchForm/SearchForm';
import React from 'react';

const Stock = () => { 

    return(
        <div className="container">
            <SearchForm /> 
            <ItemTable />
            <PageButton />
        </div>
    );
}

export default Stock;