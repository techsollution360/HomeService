import React, {useContext} from 'react';
import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h4 className={styles.productName}><Link>{product.name}</Link></h4>
        {/* <p className={styles.productDescription}>{product.description}</p> */}
        <p className={styles.productPrice}>{product.price}</p>
        <button className={styles.addToCartBtn} onClick={() => addToCart(product)}>
        Add to Cart
        </button>
        {/* <button className={styles.addToCartBtn}>Add to Cart</button> */}
      </div>
    </div>
  );
};

export default ProductCard;
