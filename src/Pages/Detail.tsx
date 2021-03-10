import React from 'react';
import DetailTable from '../components/Tables/DetailTable/DetailTable';
import Header from '../components/Header/Header';
import AddAndCLoseButton from '../components/Buttons/DeleteAndCloseButton/DeleteAndCloseButton';

const Add = () => {
    return(
        <div className="container">
            <Header
            title={'在庫詳細'}
            />
            <DetailTable />
            <AddAndCLoseButton />
        </div>
    );
}

export default Add;