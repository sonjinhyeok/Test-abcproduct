import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { StockApi } from '../../api';
import Header from '../../components/Header/Header';
import './Add.scss';

const Add = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/stock")
    }

    const stockApi = new StockApi();

    const onSubmit = (event : any) => {
        event.preventDefault();
        if(window.confirm("登録しますか？")){
            stockApi.stockAddPost();
        }
    }
    
    return(
        <div className="container">
            <Header title="在庫登録" />
            <form onSubmit={onSubmit}>
                <div className="add">
                    <label className="add__label">ID</label>
                    <input className="add__input" type="text" placeholder="ID" />
                </div>
                <div className="add">
                    <label className="add__label">商品名</label>
                    <input className="add__input" type="text" placeholder="DDD自動車" />
                </div>
                <div className="add">
                    <label className="add__label">商品数</label>
                    <input className="add__input" type="text" placeholder="400" />
                </div>
                <div className="add">
                    <label className="add__label">単価</label>
                    <input className="add__input" type="text" placeholder="300" />
                </div>
                <div className="add">
                    <label className="add__label">倉庫</label>
                    <select name="stocks" className="add__input">
                        <option value="">倉庫を選択してください</option>
                        <option value="warehouseId">9001（東京倉庫）</option>
                        <option value="warehouseId">9002（横浜倉庫）</option>
                        <option value="warehouseId">9003（吉祥寺倉庫）</option>
                    </select>
                </div>
                <div className="add">
                    <label className="add__label">入出</label>
                    <select name="stocks" className="add__input">
                        <option value="">入出を選択してください</option>
                        <option value="stockIn">入庫</option>
                        <option value="stockOut">出庫</option>
                    </select>
                </div>
                <div className="buttons">
                    <div className="button">
                        <button className="add__button">登録</button>
                    </div>
                    <div className="button">
                        <button className="close__button" onClick={handleClick}>戻る</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Add;