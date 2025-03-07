import { Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { Props } from '../navigation/prop';
import { style } from "../styles/Stylesheet"
import Item from '../components/Item';


const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <View style={[{ width: 100, display: 'flex', justifyContent: 'flex-end' }]}>
        <TouchableOpacity onPress={() => { navigation.navigate('Cart') }} style={[style.container]}>
          <Image source={require('../assets/favicon.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <Item></Item>
      </View>

    </View>

  );
};

export default Home;