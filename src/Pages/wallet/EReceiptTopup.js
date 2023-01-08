import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../../Components/Header";
import { icon } from "../../assets/icons";
import { height, View_Spacing } from "../../assets/fontsAndColors";

export default function EReceiptTopup(props) {
  return (
    <View style={{ flex: 1 }}>
      <Header
        {...props}
        rightIcon={false}
        container={{ flex: 0.95, backgroundColor: "#fcfcfc" }}
        isCustom={true}
        marginstyle={{ backgroundColor: "red" }}
        title={"E- Receipt"}
      >
        <ScrollView style={{ flex: 1, margin: 15 }}>
       
      
          <View style={{ height: View_Spacing.VS_W3 }} />
          <View style={[styles.card1, { height: (height / 100) * 7 ,}]}>
            
            <View
              style={{
              flex:1,
               
              justifyContent:'center',
              alignItems:'center'
                
              }}
            />
            <View style={ styles.Card_sub}>
              <Text style={styles.text1}>{"Amount"}</Text>
              <Text style={styles.text}>$40.00</Text>
            </View>
          </View>
          <View style={{ height: View_Spacing.VS_W3 }} />

          <View style={[styles.card1, { height: (height / 100) * 20,padding:5 ,}]}>
            <View style={styles.Card_sub}>
              <Text style={styles.text1}>{"Payment Methods"}</Text>
              <Text style={styles.text}>Visa</Text>
            </View>
            <View style={[{ bottom: 10 }, styles.Card_sub]}>
              <Text style={styles.text1}>{"Date"}</Text>
              <Text style={styles.text}>{"Dec 20, 2024 | 10:00:27 AM"}</Text>
            </View>

            <View style={[{ bottom: 22 }, styles.Card_sub]}>
              <Text style={styles.text1}>{"Transaction ID"}</Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.text}>SK7263727399</Text>
                <Image
                  source={icon.copy}
                  style={{
                    height: 15,
                    width: 15,
                    resizeMode: "contain",
                    left: 3,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={[{ bottom: 35 }, styles.Card_sub]}>
              <Text style={styles.text1}>{"Status"}</Text>
              <View
                style={{
                  // height: 15,
                  // width: 25,
                  backgroundColor: "#002B7F",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  padding:5
                }}
              >
                <Text
                  style={{
                    fontSize: (height / 100) * 1,
                    fontFamily: "Urbanist_semibold",
                    color: "#fff",
                  }}
                >
                  Topup
                </Text>
              </View>
              
            </View>
           
          </View>
        </ScrollView>
      </Header>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 1,
  },
  card1: {
    borderRadius: 20,
    elevation: 1,
    backgroundColor: "#ffffff",
  },
  Card_sub: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  text: {
    fontSize: (height / 100) * 1.8,
    fontFamily: "Urbanist_semibold",
    fontWeight: "bold",
    color: "#616161",
  },
  text1: {
    fontSize: (height / 100) * 1.8,
    fontFamily: "Urbanist_regular",
    fontWeight: "500",
    color: "#616161",
  },
});
