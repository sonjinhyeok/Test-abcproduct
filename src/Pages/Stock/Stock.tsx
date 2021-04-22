import PageButton from '../../components/PageButton/PageButton';
import ItemTable from '../../components/Tables/ItemTable/ItemTable';
import SearchForm from '../../components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';

const Stock = () => { 
    const [stocks, setStocks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [stocksPerPage, setStocksPerPage] = useState(5);

    useEffect(() => {
        fetch('/stock')
            .then(response => response.json())
            .then(stocks => {
                setStocks(stocks);
        });
    },[])

    const indexOfLast = currentPage * stocksPerPage;
    const indexOfFirst = indexOfLast - stocksPerPage;

    const currentStocks = (stocks : any) => {
        let currentStocks = 0;
        currentStocks = stocks.slice(indexOfFirst, indexOfLast);
        return currentStocks;
    }
    
    return(
        <div className="container">
            <SearchForm /> 
            <ItemTable 
                stocks={currentStocks(stocks)} 
                loading={loading}
            />
            <PageButton 
                stocksPerPage={stocksPerPage} 
                totalStocks={stocks.length}
                paginate={setCurrentPage}
            />
        </div>
    );
}

export default Stock;