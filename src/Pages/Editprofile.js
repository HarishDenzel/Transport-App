import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GetColors from '../assets/GetColors';

export default function Editprofile() {
  const navigation = useNavigation();
  return (
    <View style={styles.EditProfile}>
      {/* <View style={styles.AutoLayoutVertical4}> */}
        <View >
          <Text style={styles.Txt1081}>Enter Your Passcode</Text>
          <View style={styles.CodeInput}>
            <View style={styles.CodeInput}>
              <View style={styles._codeInput}>
                <TextInput style={styles.Txt415}></TextInput>
              </View>
            </View>
            <View style={styles.CodeInput}>
              <View style={styles._codeInput}>
                <TextInput style={styles.Txt415}></TextInput>
              </View>
            </View>
            <View style={styles.CodeInput}>
              <View style={styles._codeInput}>
                <TextInput style={styles.Txt415}></TextInput>
              </View>
            </View>
            <View style={styles.CodeInput}>
              <View style={styles._codeInput}>
                <TextInput style={styles.Txt415}></TextInput>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("EditProfile1")}>
        <Text style={styles.btnTxt}>Continue</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  EditProfile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    // backgroundColor: "rgba(255, 255, 255, 1)",
    // width: 528,
    // height: 926,
  },
  AutoLayoutVertical4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    left: 0,
    right: 0,
    paddingTop: 19,
    paddingBottom: 23,
    paddingLeft: 35,
    paddingRight: 35,
    // width: 428,
    // height: 576,
  },
  AutoLayoutVertical3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 380,
  },
  Txt1081: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 381,
    marginBottom: 80,
  },
  CodeInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3,
    marginBottom:100
  },
  _codeInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15.5,
    paddingBottom: 15.5,
    paddingLeft: 28.5,
    paddingRight: 28.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
  },
  Txt415: {
    fontSize: 24,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 29,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 100,
    backgroundColor: GetColors.PrimaryBlue_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GetColors.PrimaryBlue_500,
    width: '80%',
    marginHorizontal: '10%',
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 0.2,
    color: GetColors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
})