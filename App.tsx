import { StatusBar, SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
import {style} from "./src/styles/Stylesheet"
import { Text } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[{marginTop: StatusBar.currentHeight}]}>
        <AppNavigator/>
      </SafeAreaView>
      </SafeAreaProvider>

  );
}
