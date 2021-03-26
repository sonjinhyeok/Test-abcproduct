import React from 'react';
import './AddForms.scss';

type Title = {
  title: string
}

const AddForms = ({title}:Title) => {
  return(
    <form className="add__form">
      <div className="add">
        <label className="add__label">{title}</label>
        <input className="add__input" type="text"/>
      </div>
    </form>
  );
}

export default AddForms;