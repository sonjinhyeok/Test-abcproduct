import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { StockApi } from '../../api';
import Header from '../../components/Header/Header';
import './StockDetail.scss';

const StockDetail = () => {

    const [stocks, setStocks] = useState<any[]>([]);

    const {productId} = useParams<any>();
    
    const history = useHistory();

    const stockApi = new StockApi();

    useEffect(() => {
        stockApi.stockDetailProductIdGet(productId)
        .then(( stocks : any ) => {
            setStocks(stocks);
        })
    },[productId]);
    
    const handleClick = () => {
        history.push("/stock");
    }

     // 削除
    const handleDelete = () => {
        if(window.confirm("削除しますか？")){
            stockApi.stockDetailProductIdDelete(productId)
        }
        history.push("/stock");
    }

    return(
        <div className="container">
            <Header title="在庫詳細"/>
                {stocks.map( stock => (
                <div key={stock.productId}>
                    <div className="detail">
                        <div className="detail__title">ID</div>
                        <div className="detail__content">{stock.productId}</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">商品名</div>
                        <div className="detail__content">{stock.products.productName}</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">商品数</div>
                        <div className="detail__content">{stock.stockCount} 車</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">単価</div>
                        <div className="detail__content">{stock.products.productPrice} 万円</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">倉庫ID</div>
                        <div className="detail__content">{stock.warehouses.warehouseId}</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">倉庫名</div>
                        <div className="detail__content">{stock.warehouses.warehouseName}</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">倉庫住所</div>
                        <div className="detail__content">{stock.warehouses.warehouseAddress}</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">入出状況</div>
                        <div className="detail__content">{stock.stockIn ? '❌' : '⭕️'}</div>
                    </div>
                </div>
            ))}
            <div className="buttons">
                <div className="button">
                    <button className="delete__button" onClick={handleDelete}>削除</button>
                </div>
                <div className="button">
                    <button className="close__button" onClick={handleClick}>戻る</button>
                </div>
            </div>
        </div>
    );
}

export default StockDetail;