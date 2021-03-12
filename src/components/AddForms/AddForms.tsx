import React from 'react';
import './AddForms.scss';

const AddForms = () => {
  return(
    <form className="add__form">
      <div className="add">
        <label className="add__label">ID</label>
        <input className="add__input" type="text"/>
      </div>
      <div className="add">
        <label className="add__label">商品名</label>
        <input className="add__input" type="text"/>
      </div>
      <div className="add">
        <label className="add__label">商品数</label>
        <input className="add__input" type="text"/>
      </div>
      <div className="add">
        <label className="add__label">単価</label>
        <input className="add__input" type="text"/>
      </div>
      <div className="add">
        <label className="add__label">倉庫名</label>
        <input className="add__input" type="text"/>
      </div>
    </form>
  );
}

export default AddForms;