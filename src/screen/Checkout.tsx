import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Portal, Dialog, Button } from 'react-native-paper';
import { useContext } from 'react';
import { CartContext } from '../navigation/CartContext';
import { Props } from '../navigation/prop';

const Home: React.FC<Props> = ({ navigation }) => {
  const { cartItems, totalPrice, emptyCart } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleCheckout = () => {
    emptyCart();
    hideDialog();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <PaperProvider>
      <View>
        <Text> Checkout</Text>
        <Text>Total Price: {totalPrice}</Text>
        <TouchableOpacity onPress={showDialog}>
          <Text> Checkout </Text>
        </TouchableOpacity>

        {/* Dialog */}
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
    </PaperProvider>
  );
};

export default Home;