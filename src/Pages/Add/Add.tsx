import React from 'react';
import AddForms from '../../components/AddForms/AddForms';
import AddButton from '../../components/Buttons/AddButton/AddButton';
import CloseButton from '../../components/Buttons/CloseButton/CloseButton';
import Header from '../../components/Header/Header';
import './Add.scss';

const Add = () => {
    return(
        <div className="container">
            <Header title="在庫登録"/>
            <AddForms />
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