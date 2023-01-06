import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GetColors from '../assets/GetColors';
import Header from "../Components/Header";

export default function EditProfile(props) {
  const navigation = useNavigation();

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const [number, onChangeNumber] = React.useState(null);
  return (
    <Header
      {...props}
      rightIcon={false}
      // isBackground={true}
      title={"Edit Profile"}
    >
      <View style={styles.container}>
        <View style={styles.EditProfile}>
          <View style={styles.AutoLayoutVertical4}>
            <View >
              <Text style={styles.Txt1081}>Enter Your Passcode</Text>
              <View style={styles.CodeInput}>
                <View style={styles.CodeInput}>
                  <View style={styles._codeInput}>
                    <TextInput style={styles.Txt415}
                      // placeholder="5"
                      // placeholderTextColor = "black"
                      ref={pin1Ref}
                      keyboardType='numeric'
                      maxLength={1}
                      onChangeText={onChangeNumber}
                      onChange={(pin1) => {
                        setPin1(pin1);
                        if (pin1 !== "") {
                          pin2Ref.current.focus();
                        }
                      }}
                    />
                  </View>
                </View>
                <View style={styles.CodeInput}>
                  <View style={styles._codeInput}>
                    <TextInput style={styles.Txt415}
                      ref={pin2Ref}
                      keyboardType='numeric'
                      maxLength={1}
                      onChange={(pin2) => {
                        setPin2(pin2);
                        if (pin2 !== "") {
                          pin3Ref.current.focus();
                        }
                      }}
                    />
                  </View>
                </View>
                <View style={styles.CodeInput}>
                  <View style={styles._codeInput}>
                    <TextInput style={styles.Txt415}
                      ref={pin3Ref}
                      keyboardType='numeric'
                      maxLength={1}
                      onChange={(pin3) => {
                        setPin3(pin3);
                        if (pin3 !== "") {
                          pin4Ref.current.focus();
                        }
                      }}
                    />
                  </View>
                </View>
                <View style={styles.CodeInput}>
                  <View style={styles._codeInput}>
                    <TextInput style={styles.Txt415}
                      ref={pin4Ref}
                      keyboardType='numeric'
                      maxLength={1}
                      onChange={(pin4) => {
                        setPin4(pin4)
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.AutoLayoutVertical5}>
              <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("EditProfile1")}>
                <Text style={styles.btnTxt}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
  AutoLayoutVertical5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    top: 4,
    left: 0,
    right: 0,
    paddingTop: 1,
    paddingBottom: 23,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 450
    // width: 428,
    // height: 576,
  },
  AutoLayoutVertical4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    top: 4,
    left: 0,
    right: 0,
    paddingTop: 19,
    paddingBottom: 23,
    paddingLeft: 35,
    paddingRight: 15,
    // width: 428,
    // height: 576,
  },
  AutoLayoutVertical3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // width: 380,
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
    alignItems: "center",
    // width: 381,
    marginBottom: 80,
    marginTop: 120
  },
  CodeInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 9,
    marginBottom: 50
  },
  _codeInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: .5,
    paddingBottom: 15.5,
    paddingLeft: 16.5,
    paddingRight: 32,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
  },
  Txt415: {
    fontSize: 20,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 29,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
    marginTop:10
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
    width: '100%',
    marginHorizontal: '10%',
    marginTop: 40,
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