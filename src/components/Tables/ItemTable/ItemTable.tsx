import React from 'react';
import './ItemTable.scss';
import { Link } from 'react-router-dom';

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
                <td>1</td>
                <td><Link to="/detail" className="link__text">商品名</Link></td>
                <td><Link to="/detail" className="link__text">商品数</Link></td>
                <td><Link to="/detail" className="link__text">単価</Link></td>
                <td><Link to="/detail" className="link__text">倉庫名</Link></td>
            </tr>
            <tr>
                <td>２</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>３</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>４</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>５</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    );
}

export default ItemTable;