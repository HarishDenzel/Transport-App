import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header';
import { useNavigation } from '@react-navigation/native';
import ReactModal from '../../Components/ReactModal';
import GetImage from '../../assets/GetImage';
import Lottie from 'lottie-react-native';

export default function NotificationGeneral(props) {
    const height = Dimensions.get("screen").height;
    const navigation = useNavigation();


    //state
    const [promoModal, setPromoModal] = useState(false)
    return (

        <Header
            {...props}
            rightIcon={false}
            title={"General"} >
            <View style={{ flex: 0.7 ,backgroundColor:'#fff'}}>
                <ScrollView style={{ margin: 15, }}>
                    <Text style={[styles.font,{fontSize:height/100*2.5,paddingBottom:5}]
                        

                    } >{"3000 Points"}</Text>
                    <Text style={[styles.font,{fontSize:height/100*1.7,color: '#616161'}]
                        

                    } >{"Get additional points!"}</Text>



                    <View style={{ height: height / 100 * 2, borderBottomWidth: 1.5,borderColor:'#EEEEEE' }} />

                    <Text style={{
                        fontSize: (height / 100) * 2.3,
                        fontFamily: "Urbanist_semibold",
                        color: "#000",
                        fontWeight: '600',
                        paddingTop: height / 100 * 2
                    }} >{"Details"}</Text>

                    <Text style={{
                        fontSize: (height / 100) * 1.8,
                        fontFamily: "Urbanist_semibold",
                        color: "#616161", paddingTop: height / 100 * 2,
                        fontWeight: '400', lineHeight: 25
                    }} >{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Read more..."}</Text>
                  

                </ScrollView>
                <View style={{ paddingBottom:5, justifyContent: 'center', alignItems: 'center', paddingTop: 0 }}>
                        <TouchableOpacity
                            onPress={() => setPromoModal(true)}
                            style={{
                                height: (height / 100) * 6,
                                backgroundColor: "#0F437B",
                                width: (height / 100) * 40,
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
                                    fontWeight: '600'
                                }}
                            >
                                {"Apply Promo"}
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
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
                        <Lottie style={{ height: height / 100 * 20, width: height / 100 * 30 }} source={require("../../assets/Animation/lf20_s2lryxtd.json")} autoPlay />
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
                            {"Enjoy the deal"}
                        </Text>
                        <Text
                            style={{
                                fontSize: (height / 100) * 1.5,
                                fontFamily: "Urbanist_semibold",
                                color: "#616161",
                            }}
                        >
                            We hope you get great day today
                        </Text>
                    </View>

                    <View style={{ flex: 0.2, top: height / 100 * 5 }}>
                        <TouchableOpacity
                            onPress={() => setPromoModal(!promoModal)}
                            style={{
                                height: (height / 100) * 6,
                                backgroundColor: "#0F437B",
                                width: (height / 100) * 33,
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

    )
}

const styles = StyleSheet.create({
    bg: {
        height: "100%",
        width: '100%',
        backgroundColor:'#fff'
    },
    font: {
        fontFamily: "Urbanist_semibold",
        color: "#000",
    }
})