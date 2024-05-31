import React, { useState } from 'react';

function CategoryList() {
  // Initialize category and categories with default values
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  // Handle add category
  const handleAddCategory = () => {
    setCategories([...categories, category]);
    setCategory(''); // Clear input field after adding a category
  };

  return (
    <div>
      <input type="text" value={category} onChange={handleInputChange} />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
