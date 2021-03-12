import React from 'react';
import './ItemTable.scss';
import { Link } from 'react-router-dom';

const ItemTable = () => {

    const tdClick = () => {
        console.log();
        
    }
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
                <Link to="/detail"><td>1</td></Link>
                <td>商品名</td>
                <td>商品数</td>
                <td>単価</td>
                <td>倉庫名</td>
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