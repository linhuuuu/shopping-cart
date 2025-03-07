import { TouchableOpacity, View, Image, Text } from 'react-native';
import React from 'react';
import { style } from "../styles/Stylesheet"
import ItemBlock from '../components/Item';
import { useContext } from 'react';
import { CartContext } from '../navigation/CartContext';
import { Props } from '../navigation/prop';
import CartItemBlock from '../components/CartItem';

const Cart: React.FC<Props> = ({ navigation }) => {
  const { cartItems, shopItems, addToCart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <View style={[style.container]}>
      <Text> Cart</Text>

      <View style={[]}>
        {
          cartItems.map((item) =>
            <CartItemBlock key={item.id} cart={item} shop={shopItems} onAdd={addToCart} onRemove={removeFromCart} />
          )
        }
      </View>
      <Text>Total Price: {totalPrice}</Text>
      <TouchableOpacity onPress={() => { navigation.navigate('Checkout') }}>
        <Text> Checkout </Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default Cart;