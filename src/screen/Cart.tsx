import { TouchableOpacity, View, Image, Text } from 'react-native';
import React from 'react';
import { style } from "../styles/Stylesheet";
import ItemBlock from '../components/Item';
import { useContext } from 'react';
import { CartContext } from '../navigation/CartContext';
import { Props } from '../navigation/prop';
import CartItemBlock from '../components/CartItem';

const Cart: React.FC<Props> = ({ navigation }) => {
  const { cartItems, shopItems, addToCart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <View style={[style.container, { alignItems: 'center' }]}>
      <View style={[{ width: "80%" }]}>
        <Text style={[style.header, { marginTop: 40, marginBottom: 40 }]}> Cart</Text>

        {/* Render message if cart is empty */}
        {cartItems.length === 0 ? (
          <Text> Add Items to your cart!</Text>
        ) : (
          <View>
            {/* Render cart items */}
            {cartItems.map((item) => (
              <CartItemBlock
                key={item.id}
                cart={item}
                shop={shopItems}
                onAdd={addToCart}
                onRemove={removeFromCart}
              />
            ))}

            {/* Total Price */}
            <Text>Total Price: {totalPrice}</Text>

            {/* Proceed to Checkout Button */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Checkout')}
              style={[style.button, style.center]}
            >
              <Text style={style.white}> Proceed to Checkout </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Go Back Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          }}
          style={[style.button, style.center]}
        >
          <Text style={style.white}> Go back </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;