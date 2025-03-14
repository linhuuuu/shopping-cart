import { StatusBar, SafeAreaView, Text } from 'react-native';
import { CartProvider } from './src/navigation/CartContext';
import AppNavigator from './src/navigation/AppNavigation';


export default function App() {

  return (

      <CartProvider>
        <StatusBar></StatusBar>
        <AppNavigator />
      </CartProvider>


  );
}
