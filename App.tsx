import { StatusBar, SafeAreaView, Text } from 'react-native';
import { CartProvider } from './src/navigation/CartContext';
import AppNavigator from './src/navigation/AppNavigation';
import { style } from "./src/styles/Stylesheet"
import React from 'react';

export default function App() {

  return (

    <SafeAreaView style={[{ width: '100%', marginTop: StatusBar.currentHeight }]}>
      <CartProvider>
        <AppNavigator />
      </CartProvider>
    </SafeAreaView>
  );
}
