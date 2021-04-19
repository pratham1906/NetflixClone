import {Dimensions, StyleSheet} from 'react-native'


const styles=StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'black'
},
image:{
    width:'100%',
    height:200,
    resizeMode:'cover'
   
},

title:{
    color:'white',
fontSize:24,
fontWeight:'bold'
},
match:{
color:'#59d467',
fontWeight:'bold',
marginRight:5
},
year:{
    marginRight:5,
    color:'#bfbfbf',
    fontWeight:'bold',
    fontSize:13
},
ageContainer:{marginRight:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
paddingHorizontal:3,
   
backgroundColor:'#e6e229'
},

age:{
    color:'black',
    fontWeight:'bold'
},

playButton:{
backgroundColor:'white',
justifyContent:'center',
alignItems:'center',
padding:5,

borderRadius:3,
marginVertical:5,
},

downloadButton:{
    backgroundColor:'#2b2b2b',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    marginTop:5,
    marginVertical:5,
    borderRadius:3
},
playButtonText:{
    color:'black',
    fontSize:16,
    fontWeight:'bold'
},
downloadButtonText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
}
})


export default styles;