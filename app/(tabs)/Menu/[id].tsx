import { useLocalSearchParams, Stack } from 'expo-router';
import * as React from 'react';
import useState from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import products from '../../../assets/data/products'

const sizes=['S','M','L','XL'];

const ProductDisplay = () => {
  const{id}=useLocalSearchParams(); //is a hook
  const product =products.find((p)=>p.id.toString()===id);
  if(!product){
    return(<Text>Product not found</Text>)
  }
    return (
    <View style={styles.container}>
      <Stack.Screen options={{title:product?.name}}/>
      <Image
      soruce={{uri: product.image}}
      style={styles.image}
      />
      <Text>Select Sizes:</Text>
      {sizes.map((size)=> (<Text key={size}>{size}</Text>))}
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles=StyleSheet.create({
container:{backgroundColor:'white', flex: 1, padding: 10},
image: {width:'100%', aspectRatio:1},
price: {},
});

export default ProductDisplay;
