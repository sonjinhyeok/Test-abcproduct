import Form from '../components/Form';
import Header from '../components/Header';
import PageButton from '../components/PageButton';
import Table from '../components/Table';

const Stock = () => {
    return(
        <div className="container">
            <Header />
            <Form />
            <Table />
            <PageButton />
        </div>
    );
}

export default Stock;