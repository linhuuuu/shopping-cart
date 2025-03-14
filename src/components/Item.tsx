import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { style } from '../styles/Stylesheet';
import { ImageSourcePropType } from 'react-native';

interface ItemBlockProps {
    cart: { id: number; quantity: number; price: number; }[];
    item: { id: number; name: string; price: number; quantity: number; image: ImageSourcePropType };
    onAdd: (item: { id: number; name: string; price: number; quantity: number; image: ImageSourcePropType }) => void;
    onRemove: (id: number) => void;
}

const ItemBlock = ({ cart, item, onAdd, onRemove }: ItemBlockProps) => {
    const cartItem = cart.find((cartItem) => cartItem.id === item.id);


    return (
        <View style={[style.center, style.tilecontainer, { marginBottom: 10, flexDirection: 'column', borderColor:"#44730b",backgroundColor:"#f2ffcf"}]}>
            <View style={{ alignItems: 'center', overflow:'hidden'}}>
                <Image 
                    source={item.image} 
                    style={{ width: 600, height: 80, borderRadius: 10 }}
                />
            </View>
    
            <View style={{ margin:'5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableHighlight
                underlayColor="#808080"
                    onPress={() => onRemove(item.id)} 
                    style={[
                        { 
                            backgroundColor: '#44730b',
                            width: 40, 
                            height: 40, 
                            borderRadius: 20, 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }
                    ]}
                >
                    <Text style={[style.white, { fontSize: 30 }]}>-</Text>
                </TouchableHighlight >
    
                <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={style.itemtext}>{item.name}</Text>
                        <Text style={{ fontSize: 10 }}>In Cart x{(cartItem) ? cartItem.quantity : 0}</Text>
                    </View>
                    <Text>P{item.price}</Text>
                </View>
    
                {/* Plus Button */}
                <TouchableHighlight 
                underlayColor="#808080"
                    onPress={() => onAdd(item)} 
                    style={[
                        { 
                            backgroundColor: '#44730b', 
                            width: 40, 
                            height: 40, 
                            borderRadius: 20, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                        
                        }
                    ]}
                >
                    <Text style={[style.white, { fontSize: 30 }]}>+</Text>
                </TouchableHighlight >
            </View>
        </View>
    );
};

export default ItemBlock;