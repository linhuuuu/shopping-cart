// ItemBlock.tsx
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import { style } from '../styles/Stylesheet';
import { ImageSourcePropType } from 'react-native';

interface CartItemBlockProps {
  cart: { id: number; quantity: number; price: number }; // Cart item (id and quantity)
  shop: { id: number; name: string; price: number; quantity: number; image: ImageSourcePropType }[]; // Shop items array
  onAdd: (item: { id: number; name: string; price: number; quantity: number; image: ImageSourcePropType }) => void; // Function to add the item
  onRemove: (itemId: number) => void; // Function to remove item from cart
}

const CartItemBlock = ({ cart, shop, onAdd, onRemove }: CartItemBlockProps) => {
  const shopItem = shop.find((item) => item.id === cart.id);

  if (!shopItem) {
    return <Text>Item not found in shop</Text>;
  }

  return (
    <View style={[style.center, style.tilecontainer, { marginBottom: 10, borderColor: "#44730b", backgroundColor: "#f2ffcf" }]}>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <View style={{ borderRightWidth: 2, borderColor: "#44730b" }}>
          <Image
            source={shopItem.image}
            style={{ width: 80, height: 100 }}
          />
        </View>


        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={style.itemtext}>
            {shopItem.name} - P{shopItem.price}
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <TouchableHighlight
              underlayColor="#808080"
              onPress={() => onRemove(shopItem.id)}
              style={[
                {
                  backgroundColor: '#44730b',
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <Text style={[style.white, { fontSize: 20 }]}>-</Text>
            </TouchableHighlight>

            <Text style={{ marginHorizontal: 10 }}>Quantity: {cart.quantity}</Text>

            <TouchableHighlight
              underlayColor="#808080"
              onPress={() => onAdd(shopItem)}
              style={[
                {
                  backgroundColor: '#44730b',
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <Text style={[style.white, { fontSize: 20 }]}>+</Text>
            </TouchableHighlight>
          </View>

          <Text style={{ marginTop: 5 }}>Price: {cart.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItemBlock;