import React, { useState, createContext, ReactNode } from "react";

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
};

type CartContextType = {
  cartItems: CartItem[];
  shopItems: ShopItem[];
  addToCart: (shopItem: ShopItem) => void;
  removeFromCart: (itemId: number) => void;
  totalPrice: number; 
  emptyCart: () => void;
};

// Create Context
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  shopItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
  emptyCart: () => {},
});

// Cart Provider Component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
 
  const [shopItems, setShopItems] = useState<ShopItem[]>([
    {
      id: 1,
      name: "Potato",
      price: 60,
      quantity: 90,
    },
    {
      id: 2,
      name: "Tomato",
      price: 40,
      quantity: 50,
    },
  ]);

 
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const calculateTotalPrice = (items: CartItem[]) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  // Add Item to Cart
  const addToCart = (shopItem: ShopItem) => {
    console.log("Added to cart");

    // Step 1: Decrease shop quantity
    setShopItems((prevShopItems) =>
      prevShopItems.map((item) =>
        item.id === shopItem.id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    // Step 2: Update cart items
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.id === shopItem.id
      );

      let updatedCartItems;

      if (existingItemIndex !== -1) {
        // Item exists in cart: Increment its quantity and update price
        updatedCartItems = prevCartItems.map((item, index) =>
          index === existingItemIndex
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: shopItem.price * (item.quantity + 1), // Update price
              }
            : item
        );
      } else {
        // Item doesn't exist in cart: Add it with an initial quantity of 1
        updatedCartItems = [
          ...prevCartItems,
          { id: shopItem.id, quantity: 1, price: shopItem.price }, // Initial price
        ];
      }

      // Update total price
      setTotalPrice(calculateTotalPrice(updatedCartItems));

      return updatedCartItems;
    });
  };

  // Remove Item from Cart
  const removeFromCart = (itemId: number) => {
    console.log("Removed from cart");

    // Step 1: Increase shop quantity
    setShopItems((prevShopItems) =>
      prevShopItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    // Step 2: Decrease cart quantity or remove item
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
        .filter((item) => item.quantity > 0); // Remove items with quantity <= 0

      // Update total price
      setTotalPrice(calculateTotalPrice(updatedCartItems));

      return updatedCartItems;
    });

  };

  const emptyCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    setShopItems((prevShopItems) =>
      prevShopItems.map((item) => {
        const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
        return cartItem
          ? { ...item, quantity: item.quantity + cartItem.quantity }
          : item;
      })
    );
  };

  // Provide Context Value
  return (
    <CartContext.Provider
      value={{ shopItems, cartItems, addToCart, removeFromCart, totalPrice, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};