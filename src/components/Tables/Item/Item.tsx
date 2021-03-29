import React, { useEffect, useState } from 'react';
import './Item.scss';
import { useParams } from 'react-router';

type Items = {
    id: number;
    itemId: number;
    itemName: string;
    warehouseId: number;
    warehouseName: string;
    itemCount: number;
    itemPrice: number;
}

const Item = () => {
    const { itemId } : any = useParams();
    // const itemList = data.items.filter(item => item.itemId === Number(itemId));
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/items?itemId=${itemId}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setItems(data);
        })
    }, [itemId]);

    return(
    <table className="detail_table">
        <tbody>
            {items.map((item: Items) => (
            <>
                <tr key={item.id}>
                    <th>ID</th>
                    <td>{item.itemId}</td>
                </tr>
                <tr>
                    <th>商品名</th>
                    <td>{item.itemName}</td>
                </tr>
                <tr>
                    <th>商品数</th>
                    <td>{item.itemCount}</td>
                </tr>
                <tr>
                    <th>価格</th>
                    <td>{item.itemPrice}</td>
                </tr>
                <tr>
                    <th>倉庫名</th>
                    <td>{item.warehouseName}</td>
                </tr>
            </>
            ))}
        </tbody>
    </table>
    );
}

export default Item;