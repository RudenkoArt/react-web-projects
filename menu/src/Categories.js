import React from 'react';
import items from './data';

const Categories = ({ categories, filterItems }) => {
  const renderedButtons = categories.map((category, index) => {
    return (
      <button
        key={index}
        type='button'
        className='filter-btn'
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    );
  });

  return <div className='btn-container'>{renderedButtons}</div>;
};

export default Categories;
