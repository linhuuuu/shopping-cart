import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Portal, Dialog, Button, DefaultTheme } from 'react-native-paper';
import { useContext } from 'react';
import { CartContext } from '../navigation/CartContext';
import { Props } from '../navigation/prop';
import { style } from '../styles/Stylesheet';
import CheckoutItemBlock from '../components/CheckoutItem';
const Home: React.FC<Props> = ({ navigation }) => {
  const {totalPrice, emptyCart } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);


  const { cartItems, shopItems } = useContext(CartContext);
  const handleCheckout = () => {
    emptyCart();
    hideDialog();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <PaperProvider theme={DefaultTheme}>
      <View style={[style.container, {alignItems:'center'}]}>
        <View style={[{width:"80%",}]}>
          <Text style={[style.header, { marginTop: 40, marginBottom:40}]}> Check Out</Text>
          <View style={[]}>
          {
            cartItems.map((item) =>
              <CheckoutItemBlock cart={item} shop={shopItems}/>
            )
          }
        <Text style={style.itemtext}>Total Price: {totalPrice}</Text>
        <TouchableOpacity onPress={showDialog} style={[style.button, style.center]}>
          <Text style={style.white}> Order </Text>
        </TouchableOpacity>
        </View>


        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Checkout</Dialog.Title>
            <Dialog.Content>
              <Text>Are you sure you want to checkout?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={handleCheckout}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      </View>
    </PaperProvider>
  );
};

export default Home;