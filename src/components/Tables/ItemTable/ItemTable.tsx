import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemTable.scss';

const ItemTable = () => {
    
    const [stocks, setStocks] = useState<any[]>([]);

    useEffect(() => {
        fetch('/stock')
            .then(response => response.json())
            .then(stocks => {
                setStocks(stocks);
            });
        },[])

    return(
        <>
        <table className="item_table">
            <thead>
            <tr>
                <th>ID</th>
                <th>商品名</th>
                <th>商品数</th>
                <th>単価</th>
                <th>倉庫名</th>
            </tr>
            </thead>
            <tbody>
            {stocks.map(stock => (
                <tr key={stock.productId}>
                    <td>
                        <Link to={`/stock/${stock.productId}`} className="link__text">{stock.productId}</Link>
                    </td>
                    <td>
                        <Link to={`/stock/${stock.productId}`} className="link__text">{stock.products[0].productName}</Link>
                    </td>
                    <td>
                        <Link to={`/stock/${stock.productId}`} className="link__text">{stock.stockCount} 車</Link>
                    </td>
                    <td>
                        <Link to={`/stock/${stock.productId}`} className="link__text">{stock.products[0].productPrice} 万円</Link>
                    </td>
                    <td>
                        <Link to={`/stock/${stock.productId}`} className="link__text">{stock.warehouses[0].warehouseName}</Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
}
    
export default ItemTable;
