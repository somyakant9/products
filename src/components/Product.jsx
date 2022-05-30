
import React from "react";
import styles from './Product.module.css'
const Product = ({d,key}) => {
  // TODO: Remove below const and instead import them from chakra


  return (
    <div data-cy="product" className={styles.main} key={key}>
      <img data-cy="product-image" src ={d.imageSrc} alt="#" />
      <p data-cy="product-category">{d.category} </p>
      <div>
        <p data-cy="product-gender">{d.gender}</p>
      </div>
      <h3 data-cy="product-title">{d.title}</h3>
      <p data-cy="product-price">{d.price}</p>
    </div>
  );
};

export default Product;
