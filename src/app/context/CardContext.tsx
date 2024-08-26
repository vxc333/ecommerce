'use client';

import React, { createContext, ReactNode, useState, useContext } from "react";

interface CartContextType {
  items: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
}

const defaultContextValue: CartContextType = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
};

export const CartContext = createContext<CartContextType>(defaultContextValue);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (item: string) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

