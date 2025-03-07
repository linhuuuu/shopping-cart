// ItemBlock.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from '../styles/Stylesheet';

interface CartItemBlockProps {
  cart: { id: number; quantity: number; price: number}; // Cart item (id and quantity)
  shop: { id: number; name: string; price: number; quantity: number }[]; // Shop items array
  onAdd: (item: { id: number; name: string; price: number; quantity: number }) => void; // Function to remove the item
  onRemove: (itemId: number) => void; // Function to remove item from cart
}

const CartItemBlock = ({ cart, shop, onAdd, onRemove }: CartItemBlockProps) => {
  // Find the corresponding shop item based on cart.id
  const shopItem = shop.find((item) => item.id === cart.id);

  if (!shopItem) {
    return <Text>Item not found in shop</Text>;
  }

  return (
    <View style={[style.container, style.center, { marginBottom: 10 }]}>
      {/* Display Name and Price */}
      <Text>
        {shopItem.name} - P{shopItem.price}
      </Text>

      {/* Remove Button */}
      <TouchableOpacity onPress={() => onRemove(cart.id)}>
        <Text style={{ fontSize: 20, color: 'red' }}> - </Text>
      </TouchableOpacity>

      {/* Display Cart Quantity */}
      <Text>Quantity: {cart.quantity}</Text>

      <Text>Price: {cart.price}</Text>

      {/* Add Button */}
      <TouchableOpacity onPress={() => onAdd(shopItem)}>
        <Text style={{ fontSize: 20, color: 'green' }}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartItemBlock;