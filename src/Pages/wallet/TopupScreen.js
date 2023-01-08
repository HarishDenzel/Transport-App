import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Dimensions,Image} from "react-native";
import React, { useState } from "react";
import Header from "../../Components/Header";
import { height, View_Spacing } from "../../assets/fontsAndColors";
import Bt_Main from "../../Components/Bt_Main";
import ReactModal from "../../Components/ReactModal";
import GetImage from "../../assets/GetImage";
import Lottie from 'lottie-react-native';

const width = Dimensions.get("screen").width;
export default function TopupScreen(props) {
    const[amount,setAmount]=React.useState("");
    const[amountModal,setAmountModal]=useState(false)
   
  const data = [
    {
      id: 1,
      amount: "10",
    },
    {
      id: 2,
      amount: "20",
    },
    {
      id: 3,
      amount: "30",
    },
    {
      id: 4,
      amount: "40",
    },
    {
      id: 5,
      amount: "50",
    },
    {
      id: 6,
      amount: "100",
    },
    ,
    {
      id: 7,
      amount: "200",
    },
    {
      id: 8,
      amount: "250",
    },
    {
      id: 9,
      amount: "500",
    },
  ];
  const _setAmount=(e)=>{
setAmount(e.amount)
  }

  const _Triggr=()=>{
    setAmountModal(!amountModal),
    props.navigation.navigate("Ewallet")
  }
  return (
    <View style={{ flex: 1 }}>
      <Header
        {...props}
        righticon={false}
        onPress={() => setOptionModal(!optionModal)}
        title={"Top Up E-Wallet"}
      >
      <View style={{height:View_Spacing.VS_W5}}></View>
        <View
          style={{
            height: View_Spacing.VS_W5,
           
            justifyContent:'center',
            alignItems: "center",
           
          }}
        >
          <Text style={{
                    fontSize: (height / 100) * 2.0,
                    fontFamily: "Urbanist_regular",
                    color:'#424242',
                   
                  }} >{" Enter the amount of top up"}</Text>
        </View>
        <View
          style={{
             height: View_Spacing.VS_W15,
  
            justifyContent: "center",
            margin: View_Spacing.VS_W3,
            borderRadius: 25,
            alignItems: "center",
            flexDirection: "row",
            borderColor: "#0F437B",
            borderWidth: 2,
           

          }}
        >
          <Text
            style={{
              fontSize: View_Spacing.VS_W5,
             
             fontWeight:'bold',
             color:'#000',

            
              alignItems: "center",
            }}
          >
            {"$"}
          </Text>
          <TextInput
          value={amount}
          keyboardType="numeric"
          onChangeText={(text)=>setAmount(text)}
            style={{
              fontSize: View_Spacing.VS_W5,
           
              textAlign: "center",
              color:'#000',
              fontWeight:'bold'
            }}
            placeholder="0"
            placeholderTextColor={'#000'}
          />
        </View>

        <View style={{flexDirection:'row',flexWrap:"wrap",height:height/100*20,justifyContent:'space-around',width:'95%',alignSelf:'center',}}>
            {data.map((e,i)=>{
                return(

                <TouchableOpacity
                onPress={()=>_setAmount(e)}
            style={styles.chip}
            key={i}
          >
            <Text
              style={{
                fontSize: (height / 100) * 2.3,
                fontFamily: "Urbanist_regular",
                fontWeight: "800",
                color: "#0F437B",
              }}
            >
              {"$"}{e.amount}
            </Text>
          </TouchableOpacity>
         
          )
            })}
          
        </View>
        <View style={{height:View_Spacing.VS_W3}}></View>
        <Bt_Main label={"Continue"} onPress={()=>setAmountModal(true)}/>
      </Header>
      <ReactModal
                container={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                visible={amountModal}
            >
                <View
                    style={{
                        backgroundColor: "#fff",
                        height: (height / 100) * 50,
                        width: "89%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <View style={{ flex: 0.4, }}>
                        <Image
              source={GetImage.promoSuccess}
              style={{
                height: (height / 100) * 18,
                width: (height / 100) * 18,
                resizeMode: "contain",
              }}
            />
                        {/* <Lottie style={{ height: height / 100 * 20, width: height / 100 * 30 }} source={require("../../assets/Animation/lf20_s2lryxtd.json")} autoPlay /> */}
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
                            {"Top Up Successful"}
                        </Text>
                        <Text
                            style={{
                                fontSize: (height / 100) * 1.8,
                                fontFamily: "Urbanist_semibold",
                                color: "#616161",
                                paddingTop:10
                            }}
                        >
                            "You have successfully top up{"\n"}{"           "}e-wallet for $ {amount}"
                        </Text>
                    </View>

                    <View style={{ flex: 0.2, top: height / 100 * 5 }}>
                        <TouchableOpacity
                            onPress={() => _Triggr()}
                            style={{
                                height: (height / 100) * 6,
                                backgroundColor: "#0F437B",
                                width: (width / 100) * 70,
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
                                {"Okey"}
                            </Text>
                        </TouchableOpacity>
                        <View style={{ height: (height / 100) * 2 }}></View>

                    </View>
                </View>
            </ReactModal>
    </View>
  );
}

const styles = StyleSheet.create({
    chip:{
        height: View_Spacing.VS_W5,
        borderColor: "#0F437B",
        borderWidth: 2,
        width: (width / 100) * 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25, 
   marginTop:8
        
      }
});
