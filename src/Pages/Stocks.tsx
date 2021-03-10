import Form from '../components/Form/Form';
import ItemTable from '../components/Tables/ItemTable/ItemTable';
import PageButton from '../components/Buttons/PageButton/PageButton';

const Stock = () => { 
    return(
        <div className="container">
            <Form />
            <ItemTable />
            <PageButton />
        </div>
    );
}

export default Stock;