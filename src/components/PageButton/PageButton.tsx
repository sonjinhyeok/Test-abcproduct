import React from 'react';
import { Link } from 'react-router-dom';
import './PageButton.scss'

const PageButton = ({ stocksPerPage, totalStocks, paginate } : any) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalStocks / stocksPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div className="buttons">
            <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <span onClick={() => paginate(number)} className="page-link">
                        {number}
                    </span>
                </li>
            ))}
            <Link to="/stock/add">
                <button className="buttons__add">登録</button>
            </Link>
            </ul>
            
        </div>
    );
}

export default PageButton;