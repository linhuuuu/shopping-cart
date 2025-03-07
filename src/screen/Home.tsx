import { TouchableOpacity, View, Image, Text } from 'react-native';
import React from 'react';
import { style } from "../styles/Stylesheet"
import ItemBlock from '../components/Item';
import { useContext } from 'react';
import { CartContext } from '../navigation/CartContext';
import { Props } from '../navigation/prop';

const Home: React.FC<Props> = ({ navigation }) => {
  const { shopItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <View style={[style.container]}>
      <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
        <Text> Go to Cart </Text>
      </TouchableOpacity>
      <Text> Vegtable Items</Text>

      <View style={[]}>
        {
          shopItems.map((item) =>
            <ItemBlock key={item.id} item={item} onAdd={addToCart} onRemove={removeFromCart} />
          )
        }
      </View>
    </View>
  );
};

export default Home;