import React from 'react';
import './ItemTable.scss';
import { Link } from 'react-router-dom';
import data from '../../../db/db.json';

const ItemTable = () => {
    return(
        <table className="table">
            <tr>
                <th>ID</th>
                <th>商品名</th>
                <th>商品数</th>
                <th>単価</th>
                <th>倉庫名</th>
            </tr>
            <tr>
                <td>
                    <Link to="/detail" className="link__text">{data.items[0].id}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[0].itemName}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[0].counts}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[0].price}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[0].warehouseName}</Link>
                </td>
            </tr>
            <tr>
                <td>
                    <Link to="/detail" className="link__text">{data.items[1].id}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[1].itemName}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[1].counts}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[1].price}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[1].warehouseName}</Link>
                </td>
            </tr>
            <tr>
                <td>
                    <Link to="/detail" className="link__text">{data.items[2].id}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[2].itemName}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[2].counts}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[2].price}</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">{data.items[2].warehouseName}</Link>
                </td>
            </tr>
        </table>
    );
}

export default ItemTable;