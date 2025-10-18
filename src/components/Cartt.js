import React from 'react';
import styles from '../styles/Cart.module.css'; // Import CSS for styling

const Cart = () => {
  // Sample cart items (this should later be replaced with actual state management)
  const cartItems = [
    { id: 1, name: "Ganga Jal 1L", price: 150, quantity: 2 },
    { id: 2, name: "Ganga Jal 500ml", price: 80, quantity: 1 }
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <span>{item.name}</span>
                <span>₹{item.price} x {item.quantity}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalPrice}</h3>
          <button className={styles.checkoutButton}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
