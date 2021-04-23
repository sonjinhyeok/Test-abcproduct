import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from '../../components/Header/Header';
import './StockDetail.scss';

const StockDetail = () => {
    
    const history = useHistory();

    const { productId } : any = useParams();
    
    // const stockList = data.stocks.filter(stock => stock.productId === Number(productId));
    
    const [stocks, setStocks] = useState<any[]>([]);

    useEffect(() => {   
        fetch(`/stock/detail/${productId}`)
        .then(response => response.json())
        .then(stocks => setStocks(stocks));

    }, [productId]);

    const handleClick = () => {
        history.push("/stock");
    }

    // // 削除
    // const handleDelete = () => {
    //     if(window.confirm("削除しますか？")){
    //         fetch(`http://localhost:8080/stock/detail?productId=${productId}`, {
    //             method: "DELETE",
    //         })
    //     }
    //     history.push("/stock");
    // }

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
                        <div className="detail__content">{stock.products[0].productName}</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">商品数</div>
                        <div className="detail__content">{stock.stockCount} 車</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">単価</div>
                        <div className="detail__content">{stock.products[0].productPrice} 万円</div>
                    </div>
                    <div className="detail">
                        <div className="detail__title">倉庫名</div>
                        <div className="detail__content">{stock.warehouses[0].warehouseName}</div>
                    </div>
                </div>
            ))}
            <div className="buttons">
                <div className="button">
                    <button className="delete__button">削除</button>
                </div>
                <div className="button">
                    <button className="close__button" onClick={handleClick}>戻る</button>
                </div>
            </div>
        </div>
    );
}

export default StockDetail;