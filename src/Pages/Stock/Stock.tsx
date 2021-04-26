import PageButton from '../../components/PageButton/PageButton';
import ItemTable from '../../components/Tables/ItemTable/ItemTable';
import SearchForm from '../../components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { BaseAPI, Configuration } from '../../api';

const Stock = () => { 
    const [stocks, setStocks] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [stocksPerPage, setStocksPerPage] = useState(5);

    const conf = new Configuration({
        basePath: 'http://localhost:8080',
    });

    const baseApi = new BaseAPI(conf);

    baseApi.stockGet({
        
    })


    useEffect( () => {
        fetch('/stock')
        .then(response => response.json())
        .then(stocks => setStocks(stocks))
        .catch(() => console.log("DB接続失敗しました。"))
    },[])

    useEffect(() => {
    },[])

    const indexOfLast = currentPage * stocksPerPage;
    const indexOfFirst = indexOfLast - stocksPerPage;

    const currentStocks = (stocks : any) => {
        let currentStocks = 0;
        currentStocks = stocks.slice(indexOfFirst, indexOfLast);
        return currentStocks;
    }
    
    const handleChange = (event : any) => {
        setSearchTerm(event.target.value);
    }
    return(
        <div className="container">
            <SearchForm 
                handleChange={handleChange}
            />
            <ItemTable 
                stocks={currentStocks(stocks.filter((stock: any) => {
                    if (searchTerm == "") {
                        return stock;
                    } else if (stock.products[0].productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return stock;
                    } else if (stock.warehouses[0].warehouseName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return stock;
                    }}
                ))}
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