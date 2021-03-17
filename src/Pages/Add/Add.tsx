import React from 'react';
import AddForms from '../../components/AddForms/AddForms';
import AddButton from '../../components/Buttons/AddButton/AddButton';
import CloseButton from '../../components/Buttons/CloseButton/CloseButton';
import Header from '../../components/Header/Header';

const Add = () => {
    return(
        <div className="container">
            <Header title="在庫登録"/>
            <AddForms title="ID"/>
            <AddForms title="商品名"/>
            <AddForms title="商品数"/>
            <AddForms title="単価"/>
            <AddForms title="倉庫名"/>
            <div className="buttons">
                <div className="button">
                    <AddButton />
                </div>
                <div className="button">
                    <CloseButton />
                </div>
            </div>
        </div>
    );
}

export default Add;