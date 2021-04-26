import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Add.scss';

const Add = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/stock")
    }

    const onSubmit = (event : any) => {
        event.preventDefault();

        fetch(`/stock/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productId: productIdRef.current.value,
                productName: productNameRef.current.value,
                stockCount: stockCountRef.current.value,
                productPrice: productPriceRef.current.value,
                warehouseName: warehouseNameRef.current.value
            }),
        }).then(response => {
            if(response.ok) {
                alert("商品が登録されました。")
            }
        });
    }

    const productIdRef : any = useRef(null);
    const productNameRef : any = useRef(null);
    const stockCountRef : any = useRef(null);
    const productPriceRef : any = useRef(null);
    const warehouseNameRef : any = useRef(null);

    return(
        <div className="container">
            <Header title="在庫登録" />
            <form onSubmit={onSubmit}>
                <div className="add">
                    <label className="add__label">ID</label>
                    <input className="add__input" type="text" placeholder="1" ref={productIdRef}/>
                </div>
                <div className="add">
                    <label className="add__label">商品名</label>
                    <input className="add__input" type="text" placeholder="DDD自動車" ref={productNameRef}/>
                </div>
                <div className="add">
                    <label className="add__label">商品数</label>
                    <input className="add__input" type="text" placeholder="400" ref={stockCountRef}/>
                </div>
                <div className="add">
                    <label className="add__label">単価</label>
                    <input className="add__input" type="text" placeholder="300" ref={productPriceRef}/>
                </div>
                <div className="add">
                    <label className="add__label">倉庫名</label>
                    <input className="add__input" type="text" placeholder="東京倉庫" ref={warehouseNameRef}/>
                </div>
                <div className="buttons">
                    <div className="button">
                        <button className="add__button">登録</button>
                    </div>
                    <div className="button">
                        <button className="close__button" onClick={handleClick}>戻る</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Add;