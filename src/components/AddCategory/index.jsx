import React, { useState } from 'react';
import PropTypes from 'prop-types';


function AddCategory({setCategories}) {
  const [inputValue, setInputValue] = useState('')

  const handleChangeValue = ({target}) => {
    setInputValue(target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue)
    if(inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    }
  }
  return (
    <form className="AddCategory" onSubmit={handleSubmit }>
      <input 
        type="text"
        value={inputValue}
        onChange={handleChangeValue}
      />
    </form>  
  );
}

AddCategory.propTypes = {
  setCategories:PropTypes.func.isRequired 
}

export default AddCategory;
