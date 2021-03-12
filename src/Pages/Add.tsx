import React from 'react';
import AddForms from '../components/AddForms/AddForms';
import AddAndCloseButton from '../components/Buttons/AddAndCloseButton/AddAndCloseButton';
import Header from '../components/Header/Header';

const Add = () => {
    return(
        <div className="container">
            <Header title="在庫登録"/>
            <AddForms />
            <AddAndCloseButton />
        </div>
    );
}

export default Add;