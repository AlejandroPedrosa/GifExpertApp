import React, { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((cats) => [inputValue, ...cats]);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );
};

export default AddCategory;
