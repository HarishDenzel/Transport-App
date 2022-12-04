import React from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    Platform,
    PermissionsAndroid
    
  } from "react-native";
import GetImage from '../assets/GetImage';

function PromoImg(props) {

    const height = Dimensions.get("screen").height;
  return (
   <View style={{flex:1}}>
    <TouchableOpacity  style={{flex:0.1,justifyContent:"center",alignItems:'center',paddingTop:height/100*2}} >
          <Image
            source={props.img}
            style={{ height: height/100*23, width: height/100*40, resizeMode: "contain" ,}}
          >
            </Image>
            <View style={{flex:1,position:'absolute',paddingRight:height/100*25}}>
            <Text style={{color:'#fff'}}> Get rewards </Text>
            <Text style={{color:'#fff'}}> on every recharge</Text>

            </View>
          
        </TouchableOpacity> 

   </View>
  )
}

export default PromoImg