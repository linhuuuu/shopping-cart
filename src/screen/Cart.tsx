import { TouchableOpacity, View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { style } from '../styles/Stylesheet';
import CartItemBlock from '../components/CartItem';
import { useContext } from 'react';
import { CartContext } from '../navigation/CartContext';
import { Props } from '../navigation/prop';
import Logo from '../components/Logo';

const Cart: React.FC<Props> = ({ navigation }) => {
  const { cartItems, shopItems, addToCart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <SafeAreaView style={{ height: '100%', alignItems: 'center', backgroundColor: '#cbf58c' }}>
      <Logo />
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '80%' }}>
        <Text style={[style.header, { marginBottom: 20 }]}>Cart</Text>
        {cartItems.length === 0 ? (
          <Text>Add Items to your cart!</Text>
        ) : (
          <View>
            {cartItems.map((item) => (
              <CartItemBlock key={item.id} cart={item} shop={shopItems} onAdd={addToCart} onRemove={removeFromCart} />
            ))}
            <Text style={{ fontSize: 20 }}>Total Price: {totalPrice}</Text>
            <View style={{ alignItems: 'center', margin: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={[style.button, style.center, { borderRadius: 100, padding: 10 }]}>
                <Text style={[style.white, { fontSize: 20 }]}>Proceed to Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View style={{ alignItems: 'center', margin: 10 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })
            }
            style={[style.button, style.center, { width: '80%', borderRadius: 100, padding: 10 }]}
          >
            <Text style={[style.white, { fontSize: 20 }]}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;