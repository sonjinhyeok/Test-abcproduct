import React from 'react';
import AddForms from '../components/AddForms/AddForms';
import Header from '../components/Header/Header';

const Add = () => {
    return(
        <div className="container">
            <Header title="在庫登録"/>
            <AddForms />
        </div>
    );
}

export default Add;