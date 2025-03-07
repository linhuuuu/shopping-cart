// ItemBlock.tsx
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { style } from '../styles/Stylesheet';
interface ItemBlockProps {
  item: { id: number; name: string; price: number; quantity: number }; // Props for the item
  onAdd: (item: { id: number; name: string; price: number; quantity: number }) => void; // Function to remove the item
  onRemove: (id : number) => void;
}

const ItemBlock = ({ item, onAdd, onRemove }: ItemBlockProps) => {
  return (
    <View style={[style.container, style.center, {marginBottom: 10 }]}>
      <Text>{item.name} P{item.price} </Text>
      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Text> - </Text>
      </TouchableOpacity>
      <Text> Stock: {item.quantity}</Text>

      <TouchableOpacity onPress={() => onAdd(item)}>
        <Text> + </Text>
      </TouchableOpacity>

    </View>
  );
};

export default ItemBlock;