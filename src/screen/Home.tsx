import { TouchableOpacity, View, Image, Text } from 'react-native';
import React from 'react';
import { style } from "../styles/Stylesheet"
import ItemBlock from '../components/Item';
import { useContext } from 'react';
import { CartContext } from '../navigation/CartContext';
import { Props } from '../navigation/prop';

const Home: React.FC<Props> = ({ navigation }) => {
  const { cartItems, shopItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <View style={[style.container, {alignItems:'center'}]}>
      
      <View style={[{width:"80%",}]}>
      <Text style={[style.header, { marginTop: 40, marginBottom:40}]}> Vegetable Items</Text>
        <View style={[]}>
          {
            shopItems.map((item) =>
              <ItemBlock  cart={cartItems} key={item.id} item={item} onAdd={addToCart} onRemove={removeFromCart} />
            )
          }
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}  style={[style.button, style.center]}>
          <Text style={style.white}> Proceed to Cart </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;