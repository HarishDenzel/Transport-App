import React from "react"
import { StyleSheet, Image, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import GetImage from '../assets/GetImage';
import GetColors from '../assets/GetColors';

export default function Editprofile1() {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  return (
    <ScrollView>
      <View style={styles.EditProfile_03}>
        <View style={styles.Group642}>
          <View style={styles.AutoLayoutVertical2}>
            {/* <View style={styles.AutoLayoutVertical1}> */}
              <View style={styles.AutoLayoutVertical}>
                <Image
                  style={styles.AvatarThumbail}
                  source={require('../assets/Profile/editprofile.png')}
                />
                <View style={styles.TopAppBar1}>
                  <View style={styles.Frame25}>
                    <View style={styles.Content}>
                      <View>
                        <RadioButton
                          value="first"
                          status={checked === 'first' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('first')}
                        />
                      </View>
                      <Text style={styles.Txt914}>Male</Text>
                    </View>
                    <View style={styles.Content}>
                      <View>
                        <RadioButton
                          value="second"
                          status={checked === 'second' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('second')}
                        />
                      </View>
                      <Text style={styles.Txt914}>Female</Text>
                    </View>
                  </View>
                  <View style={styles.Text_field}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        {/* <TextInput style={styles.Txt674}>Ahmad Fazri</TextInput> */}
                        <TextInput style={styles.Txt754}
                           underlineColorAndroid = "transparent"
                           placeholder = "Name"
                           autoCapitalize = "none"
                           placeholderTextColor = "black"/>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Text_field}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        {/* <TextInput style={styles.Txt855}>920505-05-8723</TextInput> */}
                        <TextInput style={styles.Txt754}
                           underlineColorAndroid = "transparent"
                           placeholder = "Number"
                           autoCapitalize = "none"
                           placeholderTextColor = "black"/>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Text_field}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        {/* <TextInput style={styles.Txt591}>
                          ahmadfazri23@gmail.com
                        </TextInput> */}
                        <TextInput style={styles.Txt754}
                           underlineColorAndroid = "transparent"
                           placeholder = "Gmail"
                           autoCapitalize = "none"
                           placeholderTextColor = "black"/>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Text_field}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        {/* <TextInput style={styles.Txt591}>Nationality</TextInput> */}
                        <TextInput style={styles.Txt754}
                           underlineColorAndroid = "transparent"
                           placeholder = "Nationality"
                           autoCapitalize = "none"
                           placeholderTextColor = "black"/>
                      </View>
                    </View>
                  </View>
                  <View style={styles.TopAppBar1}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        <Image
                          style={styles.Frame23}
                          source={require('../assets/Profile/phone.png')}
                        />
                        {/* <TextInput style={styles.Txt1073}>Phone Number</TextInput> */}
                        <TextInput style={styles.Txt754}
                           underlineColorAndroid = "transparent"
                           placeholder = "Phone Number"
                           autoCapitalize = "none"
                           placeholderTextColor = "black"/>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            {/* </View> */}
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Editsuccess")}>
              <Text style={styles.btnTxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  EditProfile_03: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: '100%',
    height: '100%',
  },
  Group642: {
    display: "flex",
    flexDirection: "column",
  },
  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 31,
    paddingBottom: 47,
    paddingLeft: 23,
    paddingRight: 23,
    height: 750,
    width: 428,
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 380,
  },
  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 360,
  },
  AvatarThumbail: {
    width: 140,
    height: 140,
    marginBottom: 40,
  },
  Frame25: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 16,
    width: 380,
  },
  Group3: {
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: "rgba(15,67,123,1)",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(15,67,123,1)",
    width: 24,
    height: 24,
  },
  Content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Txt754: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    // color: "black",
    width: 350,
  },
  Txt914: {
    fontSize: 14,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
  },

  Text_field: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 16,
    marginRight: -25
  },
  Input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19.5,
    paddingRight: 19.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(224,224,224,1)",
    width: 380,
    height: 56,
  },
  Content1: {
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
  Txt674: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 341,
  },
  Input1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 18.5,
    paddingRight: 18.5,
    borderRadius: 12,
    backgroundColor: "rgba(0,43,127,0.03)",
    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: "rgba(15,67,123,1)",
    width: 380,
    height: 56,
  },
  Txt855: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(18,18,18,1)",
    width: 341,
  },
  Input2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 0,
    paddingLeft: 19.5,
    paddingRight: 19.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(189,189,189,1)",
    width: 380,
    height: 56,
  },
  Txt591: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    width: 341,
  },
  Input2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19.5,
    paddingRight: 19.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(189,189,189,1)",
    width: 380,
    height: 56,
  },
  Frame23: {
    width: 44,
    height: 22,
    marginRight: 12,
  },
  Txt1073: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    width: 285,
  },

  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
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
