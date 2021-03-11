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
                <td>
                    <Link to="/detail" className="link__text">1</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">abc</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">3</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">100</Link>
                </td>
                <td>
                    <Link to="/detail" className="link__text">東京倉庫</Link>
                </td>
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