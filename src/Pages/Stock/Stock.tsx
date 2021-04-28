import PageButton from '../../components/PageButton/PageButton';
import SearchForm from '../../components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { StockApi, Configuration } from '../../api';
import { Link } from 'react-router-dom';
import './Stock.scss'

const Stock = () => { 
    const [stocks, setStocks] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [stocksPerPage, setStocksPerPage] = useState(5);
    
    const stockApi = new StockApi();

    useEffect(() => {
        stockApi.stockGet()
        .then((stocks : any) => {
            setStocks(stocks);
        })
    },[]);
    
    const indexOfLast = currentPage * stocksPerPage;
    const indexOfFirst = indexOfLast - stocksPerPage;

    const currentStocks = (stocks : any) => {
        let currentStocks = 0;
        currentStocks = stocks.slice(indexOfFirst, indexOfLast)
        return currentStocks;
    }

    const handleChange = (event: any) => {
        stockApi.stockKeywordGet(event.target.value)
        .then((stocks: any) => {
            setStocks(stocks)
        })
    }

    return(
        <div className="container">
            <form className="search__form">
                <input 
                    className="search__form__input"
                    type="text"
                    placeholder="商品名または、倉庫名を検索してください"
                    onChange={handleChange}
                />
            </form>
            <table className="item_table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>商品名</th>
                        <th>商品数</th>
                        <th>価格</th>
                        <th>倉庫名</th>
                    </tr>
                </thead>
                <tbody>
                {currentStocks(stocks.map((stock : any) => (
                    <tr key={stock.productId}>
                        <td>
                            <Link to={`/stock/detail/${stock.productId}`} className="link__text">{stock.productId}</Link>
                        </td>
                        <td>
                            <Link to={`/stock/detail/${stock.productId}`} className="link__text">{stock.products.productName}</Link>
                        </td>
                        <td>
                            <Link to={`/stock/detail/${stock.productId}`} className="link__text">{stock.stockCount} 車</Link>
                        </td>
                        <td>
                            <Link to={`/stock/detail/${stock.productId}`} className="link__text">{stock.products.productPrice} 万円</Link>
                        </td>
                        <td>
                            <Link to={`/stock/detail/${stock.productId}`} className="link__text">{stock.warehouses.warehouseName}</Link>
                        </td>
                    </tr>
                )))}
                </tbody>
            </table>
            <PageButton 
                stocksPerPage={stocksPerPage} 
                totalStocks={stocks.length}
                paginate={setCurrentPage}
            />
        </div>
    );
}

export default Stock;