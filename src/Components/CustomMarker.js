import React from 'react'
import {View,StyleSheet,Image} from 'react-native'
import GetImage from '../assets/GetImage'

const CustomMarker = () =>{

return(
    <View style={style.roundmarker}>
<Image style={style.roundimage}   source={GetImage.stopPin}></Image>
    </View>
)

}
const style = StyleSheet.create({
   roundimage:{
       height:70,
       width:70,
       resizeMode:'contain',
       borderRadius:20
      
   } ,
   roundmarker:{
       height:40,
       width:40,
    //   backgroundColor:"#000",
    
   }
})
export default CustomMarker