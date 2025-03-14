import { TouchableOpacity, View, SafeAreaView, Text, ScrollView } from 'react-native';
import React from 'react';
import { style } from '../styles/Stylesheet';
import ItemBlock from '../components/Item';
import { useContext } from 'react';
import { CartContext } from '../navigation/CartContext';
import { Props } from '../navigation/prop';
import Logo from '../components/Logo';

const Home: React.FC<Props> = ({ navigation }) => {
  const { cartItems, shopItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <SafeAreaView style={{ alignItems: 'center', backgroundColor: '#cbf58c' }}>
      <Logo />
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '80%' }}>
        <Text style={[style.header, { marginBottom: 20 }]}>Vegetables</Text>
        <View>
          {shopItems.map((item) => (
            <ItemBlock cart={cartItems} key={item.id} item={item} onAdd={addToCart} onRemove={removeFromCart} />
          ))}
        </View>
        <View style={{ alignItems: 'center', margin: 10 }}>
  <TouchableOpacity 
    onPress={() => navigation.navigate('Cart')} 
    style={[style.button, style.center, { marginTop: 20, marginBottom:200 }]}
  >
    <Text style={[style.white, { fontSize: 20 }]}>
      Proceed to Cart
      {/* Conditionally render the count if there are items in the cart */}
      {cartItems.length > 0 && ` (${cartItems.reduce((total, item) => total + item.quantity, 0)})`}
    </Text>
  </TouchableOpacity>
</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;