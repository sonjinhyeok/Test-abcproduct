import React from 'react';
import CloseButton from '../CloseButton/CloseButton';
import AddButton from '../AddButton/AddButton';

const AddAndCloseButton = () => {
  return(
    <div className="buttons">
      <div className="buttons__button">
          <AddButton />
      </div>
      <div className="buttons__button">
          <CloseButton />
      </div>
    </div>
  );
}

export default AddAndCloseButton;