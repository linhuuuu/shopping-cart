import React, { useState, createContext, ReactNode } from "react";
import { ImageSourcePropType } from "react-native";


interface CartProviderProps {
  children: ReactNode;
}

type CartItem = {
  id: number;
  quantity: number;
  price: number; 
};

type ShopItem = {
  id: number;
  name: string;
  price: number;
  quantity: number; 
  image: ImageSourcePropType;

};

type CartContextType = {
  cartItems: CartItem[];
  shopItems: ShopItem[];
  addToCart: (shopItem: ShopItem) => void;
  removeFromCart: (itemId: number) => void;
  totalPrice: number; 
  emptyCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  shopItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
  emptyCart: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [shopItems, setShopItems] = useState<ShopItem[]>([
    {
      id: 1,
      name: "Potato",
      price: 10,
      quantity: 90,
      image: require('../assets/potatoes.jpg')
     
    },
    {
      id: 2,
      name: "Tomato",
      price: 11,
      quantity: 50,
      image: require('../assets/tomatoes.jpg')
    
    },
    {
      id: 3,
      name: "Lettuce",
      price: 20,
      quantity: 50,
      image: require('../assets/lettuce.jpg')
    
    },
    {
      id: 4,
      name: "Onion",
      price: 10,
      quantity: 50,
      image: require('../assets/onion.jpg')
    
    },
    {
      id: 5,
      name: "Carrots",
      price: 15,
      quantity: 50,
      image: require('../assets/carrots.jpg')
    
    },
  ]);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = (items: CartItem[]) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const addToCart = (shopItem: ShopItem) => {

    setShopItems((prevShopItems) =>
      prevShopItems.map((item) =>
        item.id === shopItem.id && item.quantity> 0 
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.id === shopItem.id
      );

      let updatedCartItems;

      if (existingItemIndex !== -1) {
        updatedCartItems = prevCartItems.map((item, index) =>
          index === existingItemIndex
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: shopItem.price * (item.quantity + 1),
              }
            : item
        );
      } else {
        updatedCartItems = [
          ...prevCartItems,
          { id: shopItem.id, quantity: 1, price: shopItem.price },
        ];
      }

      setTotalPrice(calculateTotalPrice(updatedCartItems));
      return updatedCartItems;
    });
  };

  const removeFromCart = (itemId: number) => {
    setShopItems((prevShopItems) =>
      prevShopItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems
        .map((item) =>
          item.id === itemId && item.quantity > 0 
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: item.price - (shopItems.find((shopItem) => shopItem.id === itemId)?.price ?? 0),
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      setTotalPrice(calculateTotalPrice(updatedCartItems));
      return updatedCartItems;
    });
  };

  const emptyCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{ shopItems, cartItems, addToCart, removeFromCart, totalPrice, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};