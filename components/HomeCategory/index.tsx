import * as React from 'react';
import { StyleSheet, Image, FlatList,Pressable } from 'react-native';
import categories from '../../assets/data/categories'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import styles from '../HomeCategory/style'
import {useNavigation} from '@react-navigation/native'
import MovieDetailsScreen from '../../screens/MovieDetailsScreen/index'
const firstC = categories.items[2];

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string
        }[]
    }
}

export default function HomeCategory(props: HomeCategoryProps) {
    const navigation=useNavigation();
     const {category}=props;
     const onMoviePress=(movie)=>{
         navigation.navigate('MovieDetailsScreen',{id:movie.id})
     }
    return (

        <>
            <Text style={styles.title}>{category.title}</Text>

            <FlatList

                horizontal
                data={category.movies}
                renderItem={({ item }) => (
                    <Pressable onPress={()=>onMoviePress(item)}>
                    <Image style={styles.image} source={{ uri: item.poster }} />
                    </Pressable>
                )} />

        </>
    );
}

