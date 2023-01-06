import React, {useRef, useState} from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GetImage from '../assets/GetImage';
import GetColors from '../assets/GetColors';
import Header from "../Components/Header";


export default function SignIn(props) {
    const inputRef = useRef(null);
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [emailValidError, setEmailValidError] = useState("");
    
    const [password, setPassword] = useState("");
    const [passwordValidError, setPasswordValidError] = useState("");

    const handleValidEmail = (val) => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (val.length === 0) {
        setEmailValidError("email address must be enter");
      } else if (reg.test(val) === false) {
        setEmailValidError("enter valid email address");
      } else if (reg.test(val) === true) {
        setEmailValidError("");
      }
    };
    
    const handleValidPassword = (val) => {
      if (val.length === 0) {
        setPasswordValidError("Password must be enter");
      } 
    };
    
    return (
      <Header
        {...props}
        rightIcon={false}
        // isBackground={true}
        title={""}
      >
        <View style={styles.container}>
          <View style={styles.SignIn_01}>
            <View style={styles.Group636}>
              <View style={styles.AutoLayoutVertical2}>
                <Image
                  style={styles.Frame}
                  source={require("../assets/Profile/singup.png")}
                />
                <Text style={styles.Txt804}>Welcome Back</Text>
                <View style={styles.AutoLayoutVertical1}>
                  <View style={styles.AutoLayoutVertical}>
                    <View style={styles.SignSignUpInput}>
                      <View style={styles.Text_field}>
                        <View style={styles.Content1}>
                          <View style={styles.Input}>
                            <View style={styles.Content}>
                              <Image
                                style={styles.IconlyBoldMessage}
                                source={require("../assets/Profile/email.png")}
                              />
                              <TextInput
                                style={styles.Txt543}
                                underlineColorAndroid="transparent"
                                placeholder="Email"
                                autoCapitalize="none"
                                placeholderTextColor="gray"
                                value={email}
                                onChangeText={(value) => {
                                  setEmail(value);
                                  handleValidEmail(value);
                                }}
                              />
                            </View>
                          </View>
                          <View style={{ marginLeft: 4 }}>
                            <Text style={styles.txtErr}>{emailValidError}</Text>
                          </View>
                        </View>
                      </View>
                      {/* <View style={styles.Content1}> */}
                      {/* <View style={styles.Content1}> */}
                      <View style={styles.Input}>
                        <View style={styles.Content2}>
                          <Image
                            style={styles.IconlyBoldMessage}
                            source={require("../assets/Profile/password.png")}
                          />
                          <TextInput
                            style={styles.Txt6104}
                            underlineColorAndroid="transparent"
                            placeholder="Password"
                            autoCapitalize="none"
                            placeholderTextColor="gray"
                            value={password}
                            onChangeText={(value) => {
                              setPassword(value);
                              handleValidPassword(value);
                            }}
                          />
                        </View>
                        <Image
                          style={styles.IconlyLightHide}
                          source={require("../assets/Profile/show.png")}
                        />
                      </View>
                      {/* </View> */}
                      {/* </View> */}
                    </View>
                    <View style={styles.ReminderForgetPassword}>
                      <View
                        style={
                          styles.StyleTextThemeLightStateUncheckedComponentCheckbox
                        }
                      >
                        <View style={styles.Rectangle} />
                        <Text style={styles.Txt446}>Remember me</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ForgetPassword")}
                      >
                        <Text style={styles.Txt454}>Forgot password?</Text>
                      </TouchableOpacity>
                    </View>
                    {/* <View style={styles.Button}>
                                <View style={styles._buttonBasePrimary}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Home")}
                                    >
                                        <Text style={styles.Txt646}>Sign In</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> */}
                    <TouchableOpacity
                      style={styles.Button}
                      onPress={() =>
                        navigation.navigate("FirstTimeRegister")
                      }
                    >
                      <Text style={styles.btnTxt}>Sign In</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.AutoLayoutHorizontal}>
                  <Text style={styles.Txt274}>
                    Doesn’t have an account yet?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SingUp")}
                  >
                    <Text style={styles.Txt862}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Header>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  SignIn_01: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Group636: {
    display: "flex",
    flexDirection: "column",
  },
  TypeDefaultComponentTopBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 22,
    paddingRight: 22,
  },
  Txt660: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(18,18,18,1)",
    marginRight: 283,
  },
  Group: {
    width: 18,
    height: 10,
    marginRight: 5,
  },
  Group1: {
    width: 15.27,
    height: 10.97,
    marginRight: 6,
  },
  Group2: {
    width: 26.98,
    height: 13,
  },

  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 47,
    paddingLeft: 2,
    paddingRight: 7,
    // height: 482,
    // width: 428,
  },
  ThemeLightComponentNavbar: {
    width: 380,
    height: 48,
  },
  Frame: {
    width: 300,
    height: 200,
  },
  Txt804: {
    fontSize: 38,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 58,
    color: "rgba(33,33,33,1)",
    width: 381,
    marginTop: 50,
    marginBottom: 50,
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 380,
  },
  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 380,
  },
  SignSignUpInput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  Text_field: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  Content1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  Input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 18.5,
    paddingRight: 18.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    // width: 380,
    // height: 56,
  },
  Content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 340,
  },
  IconlyBoldMessage: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  Txt543: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "black",
    width: 309,
  },
  Content2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 12,
    // width: 308,
  },
  IconlyBoldMessage: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  Txt6104: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "black",
    width: 277,
  },

  IconlyLightHide: {
    width: 20,
    height: 20,
  },

  ReminderForgetPassword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: 380,
    marginTop: 50,
  },
  StyleTextThemeLightStateUncheckedComponentCheckbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Rectangle: {
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(15,67,123,1)",
    width: 20,
    height: 20,
    borderRadius: 8,
    marginRight: 12,
  },
  Txt446: {
    fontSize: 14,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
  },

  Txt454: {
    fontSize: 14,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 100,
    backgroundColor: GetColors.PrimaryBlue_500,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: GetColors.PrimaryBlue_500,
    width: "80%",
    marginHorizontal: "10%",
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0.2,
    color: GetColors.white,
    textAlign: "center",
    justifyContent: "center",
  },
  Txt646: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0.2,
    color: "rgba(231,236,242,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  AutoLayoutHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 380,
  },
  Txt274: {
    fontSize: 14,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    textAlign: "right",
    justifyContent: "flex-end",
    marginRight: 8,
  },
  Txt862: {
    fontSize: 14,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "rgba(0,43,127,1)",
  },
  txtErr: {
    color: "red",
    fontSize: 12,
  },
});
