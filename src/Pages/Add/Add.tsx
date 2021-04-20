import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Add.scss';

const Add = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/stock")
    }

    const onSubmit = () => {
    }

    return(
        <div className="container">
            <Header title="在庫登録" />
            <form 
                onSubmit={onSubmit}
                className="add__form"
            >
                <div className="add">
                    <label className="add__label">ID</label>
                    <input className="add__input" type="text" placeholder="1" />
                </div>
                <div className="add">
                    <label className="add__label">商品名</label>
                    <input className="add__input" type="text" placeholder="DDD自動車" />
                </div>
                <div className="add">
                    <label className="add__label">商品数</label>
                    <input className="add__input" type="text" placeholder="400"/>
                </div>
                <div className="add">
                    <label className="add__label">単価</label>
                    <input className="add__input" type="text" placeholder="300"/>
                </div>
                <div className="add">
                    <label className="add__label">倉庫名</label>
                    <input className="add__input" type="text" placeholder="東京倉庫"/>
                </div>
            </form>
            <div className="buttons">
                <div className="button">
                    <button className="add__button">登録</button>
                </div>
                <div className="button">
                    <button className="close__button" onClick={handleClick}>戻る</button>
                </div>
            </div>
        </div>
    );
}

export default Add;