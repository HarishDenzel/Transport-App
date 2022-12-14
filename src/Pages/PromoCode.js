import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,FlatList
} from "react-native";
import React from "react";
import GetImage from "../assets/GetImage";
import PromoImg from "../Components/PromoImg";
import { useNavigation } from "@react-navigation/native";
export default function PromoCode(props) {
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;
  const navigation = useNavigation();
  const data=[
    {
        id:1,
        img:GetImage.code1
    },
    {
        id:2,
        img:GetImage.code2
    },
    {
        id:3,
        img:GetImage.code1
    },
    {
        id:4,
        img:GetImage.code2
    },
  ]
  return (
    <View style={{ flex: 1,backgroundColor:"#FFFFFF" }}>
       
      <View
        style={{ flex: 0.05, flexDirection: "row" ,paddingTop:height/100*2}}
      >
        <TouchableOpacity
        onPress={()=>navigation.goBack(null)}
          style={{ flex: 0.15, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={GetImage.leftArrow}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <View style={{ flex: 0.85, justifyContent: "center" }}>
          <Text
            style={{
              fontSize: (height / 100) * 2.5,
              fontFamily: "Urbanist_semibold",
              fontWeight:'bold',
              color:'#000'
            }}
          >
            Promo
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.95 }}>
        <FlatList
                      data={data}
                      renderItem={({item, index}) => (
                          
                         <PromoImg img={item.img} />
                      )}
                      keyExtractor={item => item.id}
                    />
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
