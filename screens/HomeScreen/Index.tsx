import * as React from 'react';
import { StyleSheet,Image ,FlatList} from 'react-native';
import categories from '../../assets/data/categories'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import styles from './style'
import HomeCategory from '../../components/HomeCategory/index'



export default function HomeScreen() {
  return (

    <View style={styles.container}>

<FlatList data={categories.items} renderItem={({item})=>(
  <HomeCategory category={item}/>
)}/>

    </View>
  );
}

