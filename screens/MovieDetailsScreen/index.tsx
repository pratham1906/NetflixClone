import { View, Text, Image, Pressable, ScrollView } from 'react-native'

import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Audio, Video } from 'expo-av';
import styles from './styles'

import movie from '../../assets/data/movie'
import EpisodeItem from '../../components/Episode/index'
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker'
import DropDownPicker from 'react-native-dropdown-picker';
import VideoPlayer from '../../components/VideoPlayer';
const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];
export default function MovieDetailsScreen() {
    const [currentSeason, setCurrentSeason] = useState(firstSeason)
    const [currentEpisode,setCurrentEpisode]=useState(firstSeason.episodes.items[0]);
    const seasonNames = movie.seasons.items.map(season => season.name)
    return (
        <View>
 <VideoPlayer episode={currentEpisode}/>


            <FlatList data={currentSeason.episodes.items}
                style={{ marginBottom: 220 }}
            
                renderItem={({ item }) => <EpisodeItem episode={item} onPress={(episode)=>{setCurrentEpisode(episode)}} />}

                ListHeaderComponent={(

                    <View style={{ padding: 12 }}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>

                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />

                        </View>


                        <Pressable style={styles.playButton} onPress={() => console.warn('Hello ji')}>

                            <Text style={styles.playButtonText}><Entypo name="controller-play" size={16} color="black" />Play</Text>


                        </Pressable>
                        <Pressable style={styles.downloadButton} onPress={() => console.warn('Hello ji')}>

                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={16} color="white" />{' '}
            Download</Text>


                        </Pressable>


                        <Text style={{ color: 'white', marginVertical: 10 }}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast:{movie.cast}</Text>
                        <Text style={styles.year}>Creator:{movie.creator}</Text>


                        {/* {Row with Icon Buttons} */}

                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name="plus" size={24} color="white" />
                                <Text style={{ color: 'darkgrey', marginTop: 3 }}>My List</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <FontAwesome name="thumbs-o-up" size={26} color="white" />
                                <Text style={{ color: 'darkgrey', marginTop: 3 }}>Rate</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <FontAwesome name="send-o" size={24} color="white" />
                                <Text style={{ color: 'darkgrey', marginTop: 3 }}>Share</Text>
                            </View>
                        </View>

                        <Picker
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(movie.seasons.items[itemIndex])
                            }}
                            style={{ color: 'white', width: 130 }}
                            itemStyle={{ backgroundColor: 'white' }}
                            dropdownIconColor={'white'}
                        >
                            {seasonNames.map(seasonName => (
                                <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                            ))}
                        </Picker>
                    </View>




                )}
            />
        </View>
    )
}
