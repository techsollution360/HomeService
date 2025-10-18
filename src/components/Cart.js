import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Import Cart Context
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty!</p>
          <Link to="/" className={styles.shopNowBtn}>Shop Now</Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div className={styles.cartItem} key={item.id}>
                <img src={item.image} alt={item.name} className={styles.cartImage} />
                <div className={styles.cartDetails}>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <div className={styles.quantityControl}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h3>Cart Summary</h3>
            <p>Subtotal: ₹{getTotalPrice()}</p>
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
