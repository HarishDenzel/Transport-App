import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Header from '../../Components/Header'
import { icon } from '../../assets/icons';
import { height, View_Spacing } from '../../assets/fontsAndColors';

export default function EReceipt(props) {
    return (
        <View style={{ flex: 1, }}>
            <Header {...props}
                rightIcon={false}
                title={"E- Receipt"}>
                <ScrollView style={{ flex: 1, margin: 15, }}>
                    <View style={styles.card}>
                        <Image source={icon.barcode}
                            style={{
                                height: height / 100 * 19,
                                width: height / 100 * 38,
                                resizeMode: 'contain'
                            }} />
                    </View>
                    <View style={{ height: View_Spacing.VS_W3 }} />
                    <View style={[styles.card1, { flexDirection: 'row', height: height / 100 * 10 }]}>
                        <View style={{ justifyContent: 'center', flex: 0.8, paddingLeft: View_Spacing.VS_W2 }} >
                            <Text style={styles.text} >BUS Ticket</Text>
                            <Text style={styles.text}>Route no 4 - Route 5</Text>
                        </View>
                        <View style={{ justifyContent: 'center', flex: 0.2 }} >
                            <Text style={[styles.text, { paddingLeft: 15 }]}>{"364"}</Text>

                        </View>
                    </View>

                    <View style={{ height: View_Spacing.VS_W3 }} />
                    <View style={[styles.card1, { height: height / 100 * 20, }]}>
                        <View style={styles.Card_sub}>
                            <Text style={styles.text}>{"Amount"}</Text>
                            <Text style={styles.text}>$20.00</Text>
                        </View>
                        <View style={styles.Card_sub}>
                            <Text style={styles.text}>{"promo"}</Text>
                            <Text style={styles.text}>$20.00</Text>
                        </View>
                        <View style={{ height: View_Spacing.VS_W1, borderTopWidth: 0.2, margin: 15,borderColor:'#E5E5E5' }} />
                        <View style={[{ bottom: 24 }, styles.Card_sub]}>
                            <Text style={styles.text}>{"Total"}</Text>
                            <Text style={styles.text}>$14.00</Text>
                        </View>

                    </View>
                    <View style={{ height: View_Spacing.VS_W3 }} />
                    <View style={[styles.card1, { height: height / 100 * 20, }]}>
                        <View style={styles.Card_sub}>
                            <Text style={styles.text}>{"Payment Methods"}</Text>
                            <Text style={styles.text}>Visa</Text>
                        </View>
                        <View style={[{ bottom: 10 }, styles.Card_sub]}>
                            <Text style={styles.text}>{"Date"}</Text>
                            <Text style={styles.text}>{"Dec 20, 2024 | 10:00:27 AM"}</Text>
                        </View>

                        <View style={[{ bottom: 22 }, styles.Card_sub]}>
                            <Text style={styles.text}>{"Transaction ID"}</Text>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                            <Text style={styles.text}>SK7263727399</Text>
                            <Image source={icon.copy} style={{height:15,width:15,resizeMode:'contain',left:3}}/>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={[{ bottom: 36 }, styles.Card_sub]}>
                            <Text style={styles.text}>{"Status"}</Text>
                            <View style={{height:15,width:25,backgroundColor:'#002B7F',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                                <Text style={{ fontSize: (height / 100) * 1,
        fontFamily: "Urbanist_semibold",

        color: "#fff", }}>paid</Text></View>
                        </View>

                    </View>
                </ScrollView>
            </Header>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 1,
    },
    card1: {
        borderRadius: 20,
        elevation: 1,
        backgroundColor: '#ffffff',
    },
    Card_sub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,

    },
    text: {
        fontSize: (height / 100) * 1.8,
        fontFamily: "Urbanist_semibold",
        fontWeight: 'bold',
        color: "#616161",
    },
})