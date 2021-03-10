import React from 'react';
import './DetailTable.scss';

const DetailTable = () => {
    return(
        <table className="table">
            <tr>
                <td>ID</td>
                <td>１</td>
                
            </tr>
            <tr>
                <td>商品名</td>
                <td>abc</td>
            </tr>
            <tr>
                <td>商品数</td>
                <td>３</td>
            </tr>
            <tr>
                <td>単価</td>
                <td>100</td>
            </tr>
            <tr>
                <td>倉庫名</td>
                <td>東京倉庫</td>
            </tr>
        </table>
    );
}

export default DetailTable;