// ItemBlock.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from '../styles/Stylesheet';

interface CartItemBlockProps {
  cart: { id: number; quantity: number; price: number}; // Cart item (id and quantity)
  shop: { id: number; name: string; price: number; quantity: number }[]; // Shop items array
}

const CheckoutItemBlock = ({ cart, shop}: CartItemBlockProps) => {
  // Find the corresponding shop item based on cart.id
  const shopItem = shop.find((item) => item.id === cart.id);

  if (!shopItem) {
    return <Text>Item not found in shop</Text>;
  }

  return (
    <View style={[style.container, style.center, { marginBottom: 10 }]}>
      {/* Display Name and Price */}
      <Text>
        {shopItem.name} x{cart.quantity}    -   P{shopItem.price}
      </Text>
    </View>
  );
};

export default CheckoutItemBlock;