import { Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import React from 'react';
import { Props } from '../navigation/prop';
import {style} from "../styles/Stylesheet"

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View> 
      <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
        <Text>Home</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => { navigation.navigate('Checkout') }}>
       <Text>Checkout</Text>
     </TouchableOpacity>
     </View>
      
  );
};

export default Home;