import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
const Item = () => {
    return(
        <View>
            <Image source={require('../assets/favicon.png')}/>
            <Text> Item </Text>
            <TouchableOpacity>
                <Text> Add + </Text>
            </TouchableOpacity>
        </View>

    );
};

export default Item;