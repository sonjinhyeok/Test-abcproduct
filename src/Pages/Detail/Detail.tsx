import React from 'react';
import DetailTable from '../../components/Tables/DetailTable/DetailTable';
import Header from '../../components/Header/Header';
import DeleteButton from '../../components/Buttons/DeleteButton/DeleteButton';
import CloseButton from '../../components/Buttons/CloseButton/CloseButton';

const Add = () => {
    return(
        <div className="container">
            <Header title="在庫詳細"/>
            <DetailTable />
            <DeleteButton />
            <CloseButton />
        </div>
    );
}

export default Add;