import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //lógica para adicionar
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  //lógica para remover
  const removeFromCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.name !== item.name);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
