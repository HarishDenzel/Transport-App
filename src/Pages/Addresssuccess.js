import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GetImage from '../assets/GetImage';
import GetColors from '../assets/GetColors';

export default function Addresssuccess() {
    const navigation = useNavigation();
  return (
    <View style={styles.Modal}>
      <Image
        style={styles._featurePopUpIcon}
        source={require('../assets/Profile/success.png')}
        
      />
      <View style={styles.Content}>
        <View style={styles.TextSupportingText}>
          <Text style={styles.Txt769}>Succesfully Update</Text>
          <Text style={styles.Txt224}>Your profile has been updated</Text>
        </View>
      </View>
      <View style={styles._modalActionComponent}>
         <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Successaddress")}>
        <Text style={styles.btnTxt}>Okay</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 31.05,
    paddingBottom: 31.05,
    paddingLeft: 31.05,
    paddingRight: 31.05,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: '100%',
    height: '100%',
  },
  _featurePopUpIcon: {
    width: 185.93,
    height: 180,
    marginBottom: 32,
  },
  Content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 32,
  },
  TextSupportingText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 316,
  },
  Txt769: {
    fontSize: 24,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 29,
    color: "rgba(24,26,32,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 317,
    marginBottom: 8,
  },
  Txt224: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 317,
  },

  _modalActionComponent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 316,
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
  _buttonBasePrimary: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 27,
    borderRadius: 100,
    backgroundColor: "rgba(15,67,123,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(15,67,123,1)",
    width: 316,
  },
  Txt591: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0.2,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
})


// import React from "react"
// import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import GetImage from '../assets/GetImage';
// import GetColors from '../assets/GetColors';

// export default function Addresssuccess() {
//     const navigation = useNavigation();
//   return (
//     <View style={styles.Modal}>
//       <Image
//         style={styles._featurePopUpIcon}
//         source={require('../assets/Profile/success.png')}
        
//       />
//       <View style={styles.Content}>
//         <View style={styles.TextSupportingText}>
//           <Text style={styles.Txt769}>Succesfully Update</Text>
//           <Text style={styles.Txt224}>Your profile has been updated</Text>
//         </View>
//       </View>
//       <View style={styles._modalActionComponent}>
//          <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Addressnew")}>
//         <Text style={styles.btnTxt}>Okay</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   Modal: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//     paddingTop: 31.05,
//     paddingBottom: 31.05,
//     paddingLeft: 31.05,
//     paddingRight: 31.05,
//     borderRadius: 24,
//     // backgroundColor: "rgba(255, 255, 255, 1)",
//     width: '100%',
//     height: '100%',
//   },
//   _featurePopUpIcon: {
//     width: 185.93,
//     height: 180,
//     marginBottom: 32,
//   },
//   Content: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 32,
//   },
//   TextSupportingText: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     width: 316,
//   },
//   Txt769: {
//     fontSize: 24,
//     fontFamily: "Urbanist, sans-serif",
//     fontWeight: "700",
//     lineHeight: 29,
//     color: "rgba(24,26,32,1)",
//     textAlign: "center",
//     justifyContent: "center",
//     width: 317,
//     marginBottom: 8,
//   },
//   Txt224: {
//     fontSize: 16,
//     fontFamily: "Urbanist, sans-serif",
//     fontWeight: "400",
//     lineHeight: 22,
//     letterSpacing: 0.2,
//     color: "rgba(33,33,33,1)",
//     textAlign: "center",
//     justifyContent: "center",
//     width: 317,
//   },

//   _modalActionComponent: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     // width: 316,
//   },
//   Button: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 12,
//     borderRadius: 100,
//     backgroundColor: GetColors.PrimaryBlue_500,
//     borderWidth: 1,
//     borderStyle: 'solid',
//     borderColor: GetColors.PrimaryBlue_500,
//     width: '80%',
//     marginHorizontal: '10%',
//   },
//   btnTxt: {
//     fontSize: 18,
//     fontFamily: 'Urbanist, sans-serif',
//     fontWeight: '600',
//     lineHeight: 28,
//     letterSpacing: 0.2,
//     color: GetColors.white,
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  
// })
