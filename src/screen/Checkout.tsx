import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Portal, Dialog, Button, DefaultTheme } from 'react-native-paper';
import { useContext } from 'react';
import { CartContext } from '../navigation/CartContext';
import { Props } from '../navigation/prop';
import { style } from '../styles/Stylesheet';
import Logo from '../components/Logo';
import { ScrollView } from 'react-native';

const Checkout: React.FC<Props> = ({ navigation }) => {
  const { cartItems, shopItems, totalPrice, emptyCart } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleCheckout = () => {
    emptyCart();
    hideDialog();
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };

  return (
    <PaperProvider theme={DefaultTheme}>
      <SafeAreaView style={[style.container, { alignItems: 'center', justifyContent: 'center', backgroundColor: '#cbf58c' }]}>
        <Logo />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}
        >
          <Text style={[style.header, { marginTop: 20, marginBottom: 20 }]}>Check Out</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {cartItems.map((item) => {
              const shopItem = shopItems.find(shopItem => shopItem.id === item.id);
              return (
                <Text key={item.id} style={{ fontSize: 15, textAlign: 'center' }}>
                  {shopItem?.name} x {item.quantity} - P{item.price}
                </Text>
              );
            })}
            <Text style={[style.itemtext, { textAlign: 'center', marginTop: 10, fontSize: 25 }]}>Total Price: {totalPrice}</Text>
          </View>
          <TouchableOpacity onPress={showDialog} style={[style.button, style.center, { marginTop: 10 }]}>
            <Text style={[style.white, { fontSize: 20 }]}>Order</Text>
          </TouchableOpacity>
        </ScrollView>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} style={{ alignItems: 'center' }}>
            <Dialog.Title>Checkout</Dialog.Title>
            <Dialog.Content>
              <Text style={{ textAlign: 'center' }}>Are you sure you want to checkout?</Text>
            </Dialog.Content>
            <Dialog.Actions style={{ justifyContent: 'center' }}>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={handleCheckout}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Checkout;