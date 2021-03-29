import React from 'react';
import DetailTable from '../../components/Tables/DetailTable/DetailTable';
import Header from '../../components/Header/Header';
import './Detail.scss';
import { useHistory } from 'react-router';

const Add = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/stock")
    }

    return(
        <div className="container">
            <Header title="在庫詳細"/>
            <DetailTable />
            <div className="buttons">
                <div className="button">
                    <button className="delete__button" onClick={handleClick}>削除</button>
                </div>
                <div className="button">
                    <button className="close__button" onClick={handleClick}>戻る</button>
                </div>
            </div>
        </div>
    );
}

export default Add;