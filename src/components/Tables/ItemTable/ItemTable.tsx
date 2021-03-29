import React, { useEffect, useState } from 'react';
import './ItemTable.scss';
import { Link } from 'react-router-dom';

type Items = {
    id: number;
    itemId: number;
    itemName: string;
    warehouseId: number;
    warehouseName: string;
    itemCount: number;
    itemPrice: number;
}

const ItemTable = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/items")
        .then(response => {
            return response.json();
        })
        .then(data => {
            setItems(data);
        })
    }, []);

    return(
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
            {items.map((item: Items) => (
                <tr key={item.id}>
                    <td>
                        <Link to={`/detail/${item.id}`} className="link__text">{item.itemId}</Link>
                    </td>
                    <td>
                        <Link to={`/detail/${item.id}`} className="link__text">{item.itemName}</Link>
                    </td>
                    <td>
                        <Link to={`/detail/${item.id}`} className="link__text">{item.itemCount} 個</Link>
                    </td>
                    <td>
                        <Link to={`/detail/${item.id}`} className="link__text">{item.itemPrice} 円</Link>
                    </td>
                    <td>
                        <Link to={`/detail/${item.id}`} className="link__text">{item.warehouseName}</Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default ItemTable;