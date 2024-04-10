import { StyleSheet,Text, View, Image, Pressable } from 'react-native';
import Colors from '../constants/Colors'
import { Product } from '../types';
import EditScreenInfo from '@/components/EditScreenInfo';
import {Link} from 'expo-router';

// if after Text you add the keyword onPress it listens if the person presses on the container or note, but in this case as view doesn't have on press event we use another compontent from react native library called Pressabel
// now the view is replaced with pressable.
type laprops={product: Product};

const la = ({product}:laprops) => {//as Child lets you import the styles of anything inside. and ` is used and not '.
  return (
    <Link href={`/Menu/${product.id}`} asChild> 
    <Pressable style={styles.container}>
      <Image 
      source={{uri:product.image}} 
      style={styles.image}
      resizeMode="contain" //when the aspect ratio of the image being used doesn't match the container properly, we use resizemode to make it fit, we use cover to cover the entire container but contain fills it completely 
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
    </Link>
  );
}
export default la;
const styles = StyleSheet.create({
  container: {backgroundColor:'#f8f8ff',padding:10, borderRadius: 20, flex: 1,
  },
  title: {fontSize:20, fontWeight:'bold', marginVertical:20
  },
  price: {fontSize:13, color: Colors.light.tint, fontWeight: 'bold',
  },
  image: {width: '100%', aspectRatio:1},
});
