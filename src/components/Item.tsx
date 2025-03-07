import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { style } from '../styles/Stylesheet';


interface ItemBlockProps {
    cart: { id: number; quantity: number; price: number }[]; 
    item: { id: number; name: string; price: number; quantity: number;  };
    onAdd: (item: { id: number; name: string; price: number; quantity: number; }) => void;
    onRemove: (id: number) => void;
}

const ItemBlock = ({ cart, item, onAdd, onRemove }: ItemBlockProps) => {
    const cartItem = cart.find((cartItem) => cartItem.id === item.id);
   

    return (
        <View style={[style.center, style.tilecontainer, { marginBottom: 10 }]}>
            <Text style={style.itemtext}>{item.name}</Text>
            <Text>P{item.price}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => onRemove(item.id)}>
                    <Text> - </Text>
                </TouchableOpacity>
                <Text> Add to Cart x{(cartItem) ? cartItem.quantity : 0}</Text>
                <TouchableOpacity onPress={() => onAdd(item)}>
                    <Text> + </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ItemBlock;