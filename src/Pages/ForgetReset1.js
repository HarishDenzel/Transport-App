import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView,Dimensions } from "react-native";
import GetColors from '../assets/GetColors';
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";

import Lottie from 'lottie-react-native';
import ReactModal from '../Components/ReactModal';

const ForgetReset = (props) => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const [number, onChangeNumber] = React.useState(null);

  const height = Dimensions.get("screen").height;
  const [promoModal, setPromoModal] = useState(false)

  const navigation = useNavigation();
  return (
    <Header
      {...props}
        rightIcon={false}
      // isBackground={true}
      title={"Update Passcode"}
    >
    <ScrollView>
      <View style={styles.forgetResetPassword}>
        <View style={styles.autoLayoutVertical1}>
          <View style={styles.autoLayoutVertical}>
            <Text style={styles.codeHasBeenSendTo1111}>
              Code has been send to +1 111 ******99
            </Text>
            <View style={[styles.codeInputView8, styles.mt60]}>
              <View style={styles.codeInputView1}>
                <View style={styles.codeInputView}>
                  <TextInput style={styles.codeText}
                    ref={pin1Ref}
                    keyboardType='numeric'
                    maxLength={1}
                    onChangeText={onChangeNumber}
                    onChange={(pin1) => {
                      setPin1(pin1);
                      if (pin1 !== "") {
                        pin2Ref.current.focus();
                      }
                    }} />
                </View>
              </View>
              <View style={[styles.codeInputView1, styles.ml16]}>
                <View style={styles.codeInputView}>
                  <TextInput style={styles.codeText}
                    ref={pin2Ref}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin2) => {
                      setPin2(pin2);
                      if (pin2 !== "") {
                        pin3Ref.current.focus();
                      }
                    }} />
                </View>
              </View>
              <View style={[styles.codeInputView1, styles.ml16]}>
                <View style={styles.codeInputView}>
                  <TextInput style={styles.codeText}
                    ref={pin3Ref}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin3) => {
                      setPin3(pin3);
                      if (pin3 !== "") {
                        pin4Ref.current.focus();
                      }
                    }} />
                </View>
              </View>
              <View style={[styles.codeInputView1, styles.ml16]}>
                <View style={styles.codeInputView}>
                  <TextInput style={styles.codeText}
                    ref={pin4Ref}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin4) => {
                      setPin4(pin4)
                    }} />
                </View>
              </View>
            </View>
            <Text style={[styles.resendCodeIn55S, styles.mt60]}>
              <Text style={styles.resendCodeIn}>{`Resend code in `}</Text>
              <Text style={styles.text}>55</Text>
              <Text style={styles.sText}> s</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.Button} onPress={() => setPromoModal(true)}>
            <Text style={styles.btnTxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    <ReactModal
        container={{
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={promoModal}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: (height / 100) * 45,
            width: "89%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 0.4, }}>
            {/* <Image
              source={GetImage.promoSuccess}
              style={{
                height: (height / 100) * 18,
                width: (height / 100) * 18,
                resizeMode: "contain",
              }}
            /> */}
            <Lottie style={{ height: height / 100 * 20, width: height / 100 * 30 }} source={require("../assets/Animation/lf20_s2lryxtd.json")} autoPlay />
          </View>
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: (height / 100) * 2.5,
                fontFamily: "Urbanist_semibold",
                color: "#000",
              }}
            >
              {"Congratulations"}
            </Text>
            <Text
              style={{
                fontSize: (height / 100) * 1.5,
                fontFamily: "Urbanist_semibold",
                color: "#616161",
              }}
            >
            Your account is ready to use. You will be redirected to the Home page in a few seconds..
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 5 }}>
            <TouchableOpacity
              onPress={() => setPromoModal(!promoModal)}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "#0F437B",
                width: (height / 100) * 35,
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
                }}
              >
                {"Got It"}
              </Text>
            </TouchableOpacity>
            <View style={{ height: (height / 100) * 2 }}></View>

          </View>
        </View>
      </ReactModal>
    </Header>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: 16,
  },
  mt60: {
    marginTop: 60,
  },
  codeHasBeenSendTo1111: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: "Urbanist,sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  codeText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 19,
    marginLeft: 12,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
    // marginTop:10
  },
  codeInputView: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:10
  },
  codeInputView1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderColor: "black"
  },
  codeInputView8: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  resendCodeIn: {
    color: "#212121",
  },
  text: {
    color: "#002b7f",
  },
  sText: {
    color: "#212121",
  },
  resendCodeIn55S: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: "Urbanist,sans-serif",
    textAlign: "center",
  },
  autoLayoutVertical: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVertical1: {
    position: "absolute",
    top: 154,
    right: 0,
    left: 0,
    height: 466,
    flexDirection: "column",
    padding: 24,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  forgetResetPassword: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
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
    marginTop: 150,
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
});

export default ForgetReset;
