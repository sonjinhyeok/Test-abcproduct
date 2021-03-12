import React from 'react';
import AddForms from '../components/AddForms/AddForms';
import AddButton from '../components/Buttons/AddButton/AddButton';
import CloseButton from '../components/Buttons/CloseButton/CloseButton';
import Header from '../components/Header/Header';

const Add = () => {
    return(
        <div className="container">
            <Header title="在庫登録"/>
            <AddForms />
            <AddButton />
            <CloseButton />
        </div>
    );
}

export default Add;