import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react'
import {View,Text} from 'react-native'
import styles from './style'

interface EpisodeItemProps{
    episode:{
        id:String,
        title:string,
        poster:string,
        duration:string,
        plot:string,
        video:string
    }
}
export default function VideoPlayer(props:EpisodeItemProps) {

    const {episode}=props;
const video=useRef<Playback>(null);

useEffect(() => {

    if(video==null){
        return;
    }
  (async()=>{
await video?.current?.unloadAsync();
await video?.current?.loadAsync(
    {uri:episode.video},{},false
)
  })();
},[episode])
const[status,setStatus]=useState({});
    return (
        <View>
           <Video ref={video}
           source={{uri:episode.video}}
          
           resizeMode="contain"
           usePoster={true}
           posterSource={{
               uri:episode.poster
           }}
           posterStyle={{
               width:'100%',
               height:200,
               resizeMode:'cover'
           }}


        
        style={styles.video}
        useNativeControls
           onPlaybackStatusUpdate={status=>setStatus(()=>status)}
           />
        </View>
    )
}
