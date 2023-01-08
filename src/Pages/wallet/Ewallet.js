import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import GetImage from "../../assets/GetImage";
const height = Dimensions.get("screen").height;
import { useNavigation } from "@react-navigation/native";
import Header from '../../Components/Header'

const Ewallet = (props) => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      img: GetImage.ticket,
      title: "Bus Ticket",
      time: "Dec 16, 2024 | 16:42 PM",
      rate: "- $14",

    },
    {
      id: 2,
      img: GetImage.topup,
      title: "Top Up Wallet",
      time: "Dec 16, 2024 | 11:39 PM",
      rate: "+ $80",
    },
    {
      id: 3,
      img: GetImage.ticket,
      title: "Bus Ticket",
      time: "Dec 11, 2024 | 10:42 PM",
      rate: "- $14",
    },
    {
      id: 4,
      img: GetImage.topup,
      title: "Top Up Wallet",
      time: "Dec 11, 2024 | 11:48 PM",
      rate: "- $14",
    },
    {
      id: 5,
      img: GetImage.ticket,
      title: "Bus Ticket",
      time: "Dec 11, 2024 | 11:48 PM",
      rate: "- $14",
    },
    {
      id: 6,
      img: GetImage.topup,
      title: "Top Up Wallet",
      time: "Dec 11, 2024 | 11:48 PM",
      rate: "- $14",
    },
  ];
  const _Tigger=(item)=>{
    console.log(item['title'])
if(item["title"].includes("Top Up")){
 navigation.navigate("EReceiptTopup")
}else{
   navigation.navigate("EReceipt")
}
  }
  return (
    <View style={styles.container}>
           <Header {...props}
                rightIcon={false}
                title={"E-Wallet"}>
                   <ScrollView>
      <View style={{ flex: 0.4, justifyContent: "center", }}>
        <View
          style={{
            borderRadius: 20,
            borderWidth: 1,
            marginHorizontal: 15,
            height: 220,
            backgroundColor: "#071959",
            marginTop:20
          }}
        >
          <ImageBackground source={GetImage.cardbg} style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingLeft: 10,}}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 0.5,
                  
                }}
              >
                <View style={{ paddingTop: 5, flex: 1, }}>
                  <Text style={[styles.headsubText, { color: "#fff" }]}>
                    {"Ahmad Fazri"}
                  </Text>
                  <Text style={[styles.subText, { color: "#fff" }]}>
                    {"●●●● ●●●● ●●●● 3629"}
                  </Text>
                </View>
                <Image
                  source={GetImage.visa}
                  style={{ height: 100, width: 100, resizeMode: "contain",paddingBottom:5 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 0.5,
                 
                }}
              >
                <View style={{ paddingTop: 5, flex: 1, }}>
                  <Text style={{ color: "#fff", fontSize: 15,
                  
    fontFamily: "Urbanist_regular",bottom:5
   }}>
                    {"Your Balance"}
                  </Text>
                  <Text
                    style={[styles.subText, { fontSize: 35, color: "#fff" ,fontWeight:'bold'}]}
                  >
                    {"$957,5"}
                  </Text>
                </View>
                <TouchableOpacity style={{paddingTop:30}} onPress={() => navigation.navigate("cardlist")}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 8,
                     height:35,
                      borderRadius: 20,
                      paddingHorizontal: 22,
                    }}
                  >
                    <Image
                      source={GetImage.topupic}
                      style={{
                        height: 15,
                        width: 15,
                        resizeMode: "contain",
                        marginRight: 5,
                      }}
                    />
                    <Text style={ { color: "#35383F",  fontSize: 13,
    fontFamily: "Urbanist_regular",
    
    }}>
                      Top Up
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
     
      <View style={{ flex: 0.6 }}>

        <Text style={[styles.headText,{paddingTop:20}]}>Transaction History</Text>
        
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity
            onPress={()=>_Tigger(item)}
              key={index}
              style={{ flex: 1, flexDirection: "row", padding: 10,top:10, paddingHorizontal:16}}
            >
              <Image
                source={item.img}
                style={{ height: 52, width: 52, resizeMode: "contain" }}
              />
              <View
                style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}
              >
                <Text style={styles.headsubText}>{item.title}</Text>
                <View style={{ flexDirection: "row", paddingTop: 5 }}>
                  <Text style={ { flex: 1 , fontSize: 12,
    fontFamily: "  Urbanist_regular",
    color: "#616161",}}>{item.time}</Text>
                  <Text style={{ fontSize: 12,
    fontFamily: "  Urbanist_regular",
    color: "#616161",}}>{item.rate}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
  
   <View style={{marginTop:15,height:30,width:'90%',alignSelf:'center',borderTopWidth:0.8,borderColor:'#c1c1c1'}}>
    <Text style={{fontSize: 14,
    fontFamily: "Urbanist_regular",
    fontWeight: "700",
    color: "#0F437B",
    marginTop:12}}>{"View more result"}</Text>
    </View>
      <View style={{height:height/100*5}} />
   </ScrollView>
      </Header>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headText: {
    fontSize: 14,
    fontFamily: "Urbanist_semibold",
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 20,
  },
  headsubText: {
    fontSize: 16,
    fontFamily: "Urbanist_semibold",
    fontWeight: "bold",
    color: "#000",
  },
  subText: {
    fontSize: 18,
    fontFamily: "  Urbanist_regular",
    color: "#616161",
  },
});

export default Ewallet;
