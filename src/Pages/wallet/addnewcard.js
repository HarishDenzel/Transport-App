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
    Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import GetImage from "../../assets/GetImage";
  const height = Dimensions.get("screen").height;
  import Header from "../../Components/Header";
  // import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
  import { useNavigation } from "@react-navigation/native";
import { width } from "../../assets/fontsAndColors";

  const addnewcard = (props) => {
    const navigation = useNavigation();
const[manually,setManally]=useState(false)
const[scan,setScan]=useState(true)


    const data = [
      {
        id: 1,
        img: GetImage.ticketb,
        title: "Use Scan",
        time: "BMJ Card Only",
        rate: "- $14",
        isChecked: false
      },
      {
        id: 2,
        img: GetImage.ticketb,
        title: "Manually",
        time: "BMJ Card & Debit/Credit Card",
        rate: "+ $80",
        isChecked:true
      },
    ];
    
    return (
      <View style={styles.container}>
        <Header
          {...props}
          righticon={false}
          onPress={() => setOptionModal(!optionModal)}
          title={"Add New Card"}
        >
          <View style={{ flex: 0.8, marginTop: 10 }}>
          <View style={{height:20}}></View>
            <Text style={[styles.headText,{paddingHorizontal:10}]}>
            Select your preference choice of adding new card to your E-Wallet
            </Text>
            <View style={{height:10}}></View>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <Pressable onPress={()=> {
                  setManally(!manually)
                  setScan(!scan)

                }}
                // {index === 1 ?navigation.navigate("cardDetails"):null}}
                >
                <View
                  key={index}
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    padding: 20,
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: { width: -2, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 1,
                    marginHorizontal: 20,
                    elevation: 2,
                    marginBottom: 10,
                    marginTop: 10,
                    backgroundColor: "#ffff",
                    justifyContent:'center',
                    alignItems:'center',
                    borderColor:  index ==1 ? manually ? '#002B7F':'#fff' : scan ? '#002B7F':'#fff',
                    borderWidth:1
                  }}
                >
                  <Image
                    source={item.img}
                    style={{ height: 52, width: 52, resizeMode: "contain" }}
                  />
                  <View
                    style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}
                  >
                    <Text style={[styles.subText, ]}>{item.time}</Text>

                    <Text style={styles.headsubText}>{item.title}</Text>
                    
                  </View>
                
                </View>
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={{ flex: 0.2 ,justifyContent:"center"}}>
            <View style={{  justifyContent: 'center', alignItems: 'center',}}>
                        <TouchableOpacity
                            onPress={() => {manually ?navigation.navigate("cardDetails"):null}}
                            style={{
                                height: (height / 100) * 6,
                                backgroundColor: "#0F437B",
                                width: (width / 100) * 90,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 25,
                              

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: (height / 100) * 2,
                                    fontFamily: "Urbanist_semibold",
                                    color: "#fff",
                                    fontWeight: '600'
                                }}
                            >
                                {"Continue"}
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
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
      fontSize: 15,
      fontFamily: "Urbanist_regular",
      fontWeight: "500",
      color: "#424242",
      paddingLeft: 20,
    },
    headsubText: {
      fontSize: 16,
      fontFamily: "Urbanist_semibold",
      fontWeight: "700",
      color: "#000",
    },
    subText: {
      fontSize: 14,
      fontFamily: "  Urbanist_regular",
      color: "#616161",
    },
    headerFooterStyle: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection:'row'
    },
    textStyle: {
      fontSize: 13,
      fontFamily: "Urbanist_semibold",
      fontWeight: "700",
      color: "#0F437B",
    },
  });
  
  export default addnewcard;
  