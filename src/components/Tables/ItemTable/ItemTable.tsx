import React from 'react';
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
                <td>abc</td>
                <td>3</td>
                <td>100</td>
                <td>東京倉庫</td>
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