import {StyleSheet} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


export const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width:'100%',
    },
    
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollViewContent: {
      flexGrow: 1,
      padding: 20,
    },
    icon: {
      width:'100%',
      height:'100%'
    },
    itemimg: {
      width:'100%',
      height:'100%'
    },
    tilecontainer: {
      borderRadius: 10,
      borderColor: '#000',
      borderWidth: 2,
      overflow: 'hidden',

    },
    header: {
      fontSize:30,
    },
    itemtext: {
      fontSize:20,
    },
    margin: {
      width:'80%',
    },
    button: {
      borderRadius: 10,
      borderColor: '#fff',
      backgroundColor: '#000',
      borderWidth: 2,
    },
    white: {
      color:'#fff'
    }
});


