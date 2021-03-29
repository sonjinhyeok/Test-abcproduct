import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyPage.scss';

const EmptyPage = () => {
  return(
    <div className="none_page">
      <h1>存在しないページです。</h1>
      <Link to="/">戻る</Link>
    </div>
  );
}
    

export default EmptyPage;