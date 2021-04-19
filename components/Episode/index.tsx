import React from 'react'
import {View,Text,Image, Pressable} from 'react-native'
import styles from '../../components/Episode/style';
import { AntDesign } from '@expo/vector-icons';
interface EpisodeItemProps{
episode:{
    id:string,
    title:string,
    poster:string,
    duration:string,
    plot:string,
    video:string
}
,
onPress:(eppisode:{    id:string,
    title:string,
    poster:string,
    duration:string,
    plot:string,
    video:string})=>{}
}
export default function EpisodeItem(props:EpisodeItemProps) {

    const {episode,onPress}=props;

    return (


            
       <View style={{flex:1,backgroundColor:'black',marginVertical:10}}>
           
        <Pressable style={{margin:10}} onPress={()=>onPress(episode)}>
<Text>Episode</Text>
<View style={styles.row}>
<Image style={styles.image} source={{uri:episode.poster}}/>

<View style={styles.titleContainer}>
    <Text style={styles.title}>{episode.title}</Text>
    <Text style={styles.duration}>{episode.duration}</Text>

</View>
<AntDesign name="download" size={24} color="white" />
</View>
<Text style={styles.plot}>{episode.plot}</Text>
</Pressable>
       </View>
    )
}
