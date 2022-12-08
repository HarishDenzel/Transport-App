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
  import Header from "../../Components/Header";
  // import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
  import { useNavigation } from "@react-navigation/native";

  const addnewcard = (props) => {
    const navigation = useNavigation();

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
          <View style={{ flex: 1, marginTop: 10 }}>
            <Text style={styles.headText}>
            Select your preference choice of adding new card to your E-Wallet
            </Text>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={()=>{index === 1 ?navigation.navigate("cardDetails"):null}}>
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
                    borderColor: item.isChecked?'#002B7F':'#fff',
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
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
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
  