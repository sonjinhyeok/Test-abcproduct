import SearchForm from '../../components/SearchForm/SearchForm';
import ItemTable from '../../components/Tables/ItemTable/ItemTable';
import PageButton from '../../components/PageButton/PageButton';

const Stock = () => { 

    return(
        <div className="container">
            <SearchForm />
            <ItemTable />
            <PageButton />
        </div>
    );
}

export default Stock;