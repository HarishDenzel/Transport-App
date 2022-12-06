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
  import React from "react";
  import GetImage from "../../assets/GetImage";
  const height = Dimensions.get("screen").height;
  
  const cardlist = () => {
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
        img: GetImage.ticket,
        title: "Bus Ticket",
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
        img: GetImage.ticket,
        title: "Bus Ticket",
        time: "Dec 11, 2024 | 11:48 PM",
        rate: "- $14",
      },
    ];
    return (
      <View style={styles.container}>
      
        <View style={{ flex: 1 }}>
          <Text style={styles.headText}>Select the top up method you want to use.</Text>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View
                key={index}
                style={{ flex: 1, flexDirection: "row", padding: 20 }}
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
                    <Text style={[styles.subText, { flex: 1 }]}>{item.time}</Text>
                    <Text style={styles.subText}>{item.rate}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    headText: {
      fontSize: (height / 100) * 2.5,
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
      fontSize: 14,
      fontFamily: "  Urbanist_regular",
      color: "#616161",
    },
  });
  
  export default cardlist;
  