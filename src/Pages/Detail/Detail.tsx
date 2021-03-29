import Header from '../../components/Header/Header';
import './Detail.scss';
import { useHistory } from 'react-router';
import Item from '../../components/Tables/Item/Item';

const Detail = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/stock")
    }
    const handleDelete = () => {
        if(window.confirm("削除しますか？")){
            
        }
    }

    return(
        <div className="container">
            <Header title="在庫詳細"/>
            <Item />
            <div className="buttons">
                <div className="button">
                    <button className="delete__button" onClick={handleDelete}>削除</button>
                </div>
                <div className="button">
                    <button className="close__button" onClick={handleClick}>戻る</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;