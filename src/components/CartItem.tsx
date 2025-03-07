// ItemBlock.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from '../styles/Stylesheet';


interface CartItemBlockProps {
  cart: { id: number; quantity: number; price: number }; // Cart item (id and quantity)
  shop: { id: number; name: string; price: number; quantity: number;  }[]; // Shop items array
  onAdd: (item: { id: number; name: string; price: number; quantity: number;}) => void; // Function to remove the item
  onRemove: (itemId: number) => void; // Function to remove item from cart
}

const CartItemBlock = ({ cart, shop, onAdd, onRemove }: CartItemBlockProps) => {
  const shopItem = shop.find((item) => item.id === cart.id);

  if (!shopItem) {
    return <Text>Item not found in shop</Text>;
  }

  return (
    <View style={[style.tilecontainer, style.center, { marginBottom: 10 }]}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={style.itemtext}>
          {shopItem.name}  - P{shopItem.price}
        </Text>
     
      </View>

      
      <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => onRemove(cart.id)}>
        <Text style={{}}> - </Text>
      </TouchableOpacity>

      <Text>Quantity: {cart.quantity}</Text>
      <TouchableOpacity onPress={() => onAdd(shopItem)}>
        <Text style={{}}> + </Text>
      </TouchableOpacity>
      </View>
      <Text>Price: {cart.price}</Text>

    </View>
  );
};

export default CartItemBlock;