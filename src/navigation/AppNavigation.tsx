import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import Checkout from "../screen/Checkout";
import Cart from "../screen/Cart";
import { style } from "../styles/Stylesheet";
import { useState } from "react";
import Item from "../components/Item";


const Stack = createNativeStackNavigator();

const AppNavigator=() => { 
 
    return ( 
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
              headerShown: false, 
            }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default AppNavigator;