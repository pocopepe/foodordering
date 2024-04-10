import { StyleSheet,Text, View, FlatList } from 'react-native';
import Colors from '../../../constants/Colors'
import products from '../../../assets/data/products'
import EditScreenInfo from '@/components/EditScreenInfo';
import ProductlistItem from '../../../components/ProductlistItem'

export default function MenuScreen() {
  return (
      <FlatList 
        data={products}
        renderItem={({item}) => <ProductlistItem product={item} />}
        numColumns={2}  
        contentContainerStyle={{gap:10, padding:10}} //gives gap between two vertical container
        columnWrapperStyle={{gap:10}} //gives gap between two horizontal container
      />

  );
}

const styles = StyleSheet.create({
  container: {backgroundColor:'#f8f8ff',padding:10, borderRadius: 20
  },
  title: {fontSize:20, fontWeight:'bold', marginVertical:20
  },
  price: {fontSize:13, color: Colors.light.tint, fontWeight: 'bold',
  },
  image: {width: '100%', aspectRatio:1},
});
