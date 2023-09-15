import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlices';

const Categorie = ({ title, category }) => {
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(selectCategory(category));
  };

  return (
    <a href="#" 
    selected={category === selectedCategory}
    onClick={handleClick}>
      {title}
    </a>
  );
};

export default Categorie;
