import { StyleSheet, Text, View ,Image,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'

export default function NotificationList(props) {
    const{img,Head,SubHead,time,onPress,isRead}=props
    const height = Dimensions.get("screen").height;
  return (
    <View>
     <View style={{paddingVertical:3}} />
          <View style={{flex:1,height:height/100*10,flexDirection:'row',borderRadius:height/100*2,backgroundColor: isRead ?'#FFFF': '#F5F5F5',}}>
            <View style={{flex:0.2,justifyContent:"center",alignItems:'center'}}>
            <Image
                        source={img}
                        style={{height:height/100*5,width:height/100*5,resizeMode:"contain"}}
                    />
            </View>
            <TouchableOpacity onPress={onPress} style={{flex:0.8,justifyContent:'center',}}>
            <Text  style={[styles.list_font,{fontSize: (height / 100) * 1.8,}]}>{Head}</Text>
                    <Text  style={[styles.list_font,{fontSize: (height / 100) * 1.3,fontWeight:'500',color:'#616161',paddingVertical:2}]}>{SubHead}</Text>
                    <Text  style={[styles.list_font,{fontSize: (height / 100) * 1.2,fontWeight:'500',color:'#616161'}]}>{time}</Text>
            </TouchableOpacity>


          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  list_font: {
    fontFamily: "Urbanist_semibold",
    color: "#616161",
    fontWeight: 'bold',
  }
})