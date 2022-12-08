import { View, Text,Dimensions,StyleSheet } from 'react-native'
import React from 'react'
import GetImage from "../../assets/GetImage";
const height = Dimensions.get("screen").height;
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";

const cardDetails = (props) => {
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = React.useState("name");
    const [reg_details, setReg_details] = useState({
        Name: "",
        cardNumber: "",
        date: "",
        cvv: "",
       
      });
      const [editable, setEditable] = useState(true);
      const labelTextArray = {
        Name: "Name",
        cardNumber: "Card Number",
        date: "DD/YY",
        cvv: "CVV",
      };
    
      const maxLength = {
        Name: 10,
        cardNumber: 16,
        date: 5,
        cvv: 4,
      };
    const data = [
      {
        id: 1,
        img: GetImage.mastercard,
        title: "•••• •••• •••• •••• 4679",
        time: "Dec 16, 2024 | 16:42 PM",
        rate: "- $14",
        isChecked: false
      },
      {
        id: 2,
        img: GetImage.mastercard,
        title: "•••• •••• •••• •••• 4679",
        time: "Dec 16, 2024 | 11:39 PM",
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
          <View style={{ flex: 1 }}>
          {/* <CreditCard
                imageFront={GetImage.cardbg}
                imageBack={GetImage.cardbg}
                shiny={false}
                bar={false}
                focused={isFocused}
                number={reg_details.cardNumber}
                name={reg_details.Name}
                expiry={reg_details.date}
                cvc={reg_details.cvv}
              /> */}
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
  

export default cardDetails