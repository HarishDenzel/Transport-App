import { Text, View ,TouchableOpacity,Dimensions,StyleSheet} from 'react-native'
import React, { Component } from 'react'
const height = Dimensions.get("screen").height;
function Bt_Main (props) {
   const{onPress,label}=props
    return (
      <View>
       <View
                style={{
                  height: (height / 100) * 10,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={styles.btn3}
                  onPress={onPress}
                >
                  <Text
                    style={{
                      fontSize: (height / 100) * 2,
                      fontFamily: "Urbanist_semibold",
                      color: "#fff",
                    }}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              </View>
      </View>
    
    )
}

export default Bt_Main;

const styles=StyleSheet.create({
    btn3:{
        height: (height / 100) * 6,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0F437B",
        borderRadius: 25,
        top: 5,
        position: "absolute",
      }
})