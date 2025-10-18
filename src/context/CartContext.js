// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// // Cart Provider
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Add Item to Cart
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   // Update Quantity
//   const updateQuantity = (id, newQuantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
//       )
//     );
//   };

//   // Remove Item
//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Get Total Price
//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, getTotalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

// Create Context
export const CartContext = createContext();

// Hardcoded data as fallback if API is not available
const hardcodedCart = [
  { id: 1, name: "Product 1", price: 100, quantity: 1 },
  { id: 2, name: "Product 2", price: 200, quantity: 2 }
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); // User state (null = not logged in)

  // Fetch cart from API if logged in, otherwise from cookies
  useEffect(() => {
    if (user) {
      fetchCartFromAPI();
    } else {
      const storedCart = Cookies.get("cart");
      setCart(storedCart ? JSON.parse(storedCart) : []);
    }
  }, [user]);

  // Fetch Cart from API
  const fetchCartFromAPI = async () => {
    try {
      // Commented API call (replace with actual API URL)
      // const response = await axios.get("/api/cart", { headers: { Authorization: `Bearer ${user.token}` } });
      // setCart(response.data);

      setCart(hardcodedCart); // Using hardcoded data for now
    } catch (error) {
      console.error("Error fetching cart:", error);
      setCart(hardcodedCart); // Fallback to hardcoded cart
    }
  };

  // Save Cart to API if logged in, otherwise to cookies
  useEffect(() => {
    if (user) {
      saveCartToAPI();
    } else {
      Cookies.set("cart", JSON.stringify(cart), { expires: 7 }); // Cookie expires in 7 days
    }
  }, [cart, user]);

  // Save Cart to API
  const saveCartToAPI = async () => {
    try {
      // Commented API call (replace with actual API URL)
      // await axios.post("/api/cart", { cart }, { headers: { Authorization: `Bearer ${user.token}` } });

      console.log("Cart saved to API:", cart);
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };

  // Add Item to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Update Quantity
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Get Total Price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, getTotalPrice, setUser }}>
      {children}
    </CartContext.Provider>
  );
};
