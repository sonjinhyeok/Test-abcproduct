import React from 'react';
import { useHistory } from 'react-router-dom';
import AddForms from '../../components/AddForms/AddForms';
import Header from '../../components/Header/Header';
import './Add.scss';

const Add = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/stock")
    }
    return(
        <div className="container">
            <Header title="在庫登録" />
            <AddForms title="ID"/>
            <AddForms title="商品名"/>
            <AddForms title="商品数"/>
            <AddForms title="単価"/>
            <AddForms title="倉庫名"/>
            <div className="buttons">
                <div className="button">
                    <button className="add__button" onClick={handleClick}>登録</button>
                </div>
                <div className="button">
                    <button className="close__button" onClick={handleClick}>戻る</button>
                </div>
            </div>
        </div>
    );
}

export default Add;