import { StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';
import AppNavigator from './src/navigation/AppNavigation';
import { style } from "./src/styles/Stylesheet"
import { Text } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface Item {
    
  id: number;
  name: string;
  quantity: number;
}

export default function App() {


  const [itemData, SetItemData] = useState<Item[]>([
    {
      id: 1,
      name: "tomato",
      quantity: 0 
    },
    {
      id: 2,
      name: "potato",
      quantity: 0 
    }
  ]
    
  );
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[{marginTop: StatusBar.currentHeight}]}>
        <AppNavigator items={itemData}/>
      </SafeAreaView>
      </SafeAreaProvider>

  );
}
