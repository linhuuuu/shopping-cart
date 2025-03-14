import React from "react";
import { Image } from "react-native";
const Logo = () => {
    return(
        <Image source={require("../assets/farmer's market.png")} style={{height:"20%", width:"50%", marginTop:10}}/>
    );
}

export default Logo;