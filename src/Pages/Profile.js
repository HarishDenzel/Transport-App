import React from "react"
import { Pressable, StyleSheet, Image, Text, View, ScrollView } from "react-native"
import Helper from "../Components/utils/Helper";
import Header from "../Components/Header";
import { useNavigation } from "@react-navigation/native";

export default function Profile(props) {
    // const logOut = () => {
    //     Helper.removeItemValue('userdata');
    //     navigation.navigate('Intro1');
    // };
    const navigation = useNavigation();

    return (
        <Header
            {...props}
            rightIcon={false}
            // isBackground={true}
            title={"Profile"}
        >
            <View style={styles.container}>

                <View style={styles.Profile}>
                    <View style={styles.Group0}>
                        <View style={styles.AutoLayoutVertical1}>
                            <Image
                                style={styles.AvatarThumbail}
                                source={require('../assets/Profile/profile.png')}
                            />
                            <View style={styles.AutoLayoutVertical}>
                                <Text style={styles.Txt1}>Ahmad Fazri</Text>
                                <Text style={styles.Txt2}>+60 11134667671</Text>
                            </View>
                            <Image
                                style={[styles.themeLightDividerIcon, styles.mt16]}
                                resizeMode="cover"
                                source={require("../assets/Profile/themelight-divider1.png")}
                            />
                        </View>


                        <View style={styles.AutoLayoutVertical2}>
                            <Pressable style={styles.AutoLayoutHorizontal}
                                onPress={() => navigation.navigate("Editprofile")}
                            >
                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/edit.png')}
                                />
                                <Text style={styles.Txt385}>Edit Profile</Text>
                                <Image
                                    style={styles.IconlyLightArrowRight2}
                                    source={require('../assets/Profile/left.png')}
                                />
                            </Pressable>
                            <Pressable style={styles.AutoLayoutHorizontal}
                                onPress={() => navigation.navigate("Address")}>
                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/address.png')}
                                />
                                <Text style={styles.Txt385}>Address</Text>
                                <Image
                                    style={styles.IconlyLightArrowRight2}
                                    source={require('../assets/Profile/left.png')}
                                />
                            </Pressable>
                            <Pressable style={styles.AutoLayoutHorizontal}
                                onPress={() => navigation.navigate("Notification")}>
                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/notification.png')}
                                />
                                <Text style={styles.Txt385}>Notification</Text>
                                <Image
                                    style={styles.IconlyLightArrowRight2}
                                    source={require('../assets/Profile/left.png')}
                                />
                            </Pressable>
                            <Pressable style={styles.AutoLayoutHorizontal}
                                // onPress={() => navigation.navigate("Payment")}>
                                onPress={() => navigation.navigate("Ewallet")}>

                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/payment.png')}
                                />
                                <Text style={styles.Txt385}>Payment</Text>
                                <Image
                                    style={styles.IconlyLightArrowRight2}
                                    source={require('../assets/Profile/left.png')}
                                />
                            </Pressable>
                            <Pressable style={styles.AutoLayoutHorizontal}
                                onPress={() => navigation.navigate("Security")}>
                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/security.png')}
                                />
                                <Text style={styles.Txt385}>Security</Text>
                                <Image
                                    style={styles.IconlyLightArrowRight2}
                                    source={require('../assets/Profile/left.png')}
                                />
                            </Pressable>
                            <Pressable style={styles.AutoLayoutHorizontal}
                                onPress={() => navigation.navigate("Language")}>
                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/language.png')}
                                />
                                <Text style={styles.Txt2109}>Language</Text>
                                <Text style={styles.Txt1108}>English (US)</Text>
                                <Image
                                    style={styles.IconlyLightArrowRight2}
                                    source={require('../assets/Profile/left.png')}
                                />
                            </Pressable>
                            <Pressable style={styles.AutoLayoutHorizontal}
                                onPress={() => navigation.navigate("PrivacyPolicy")}>
                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/privacypolicy.png')}
                                />
                                <Text style={styles.Txt385}>Privacy Policy</Text>
                                <Image
                                    style={styles.IconlyLightArrowRight2}
                                    source={require('../assets/Profile/left.png')}
                                />
                            </Pressable>
                            <Pressable style={styles.AutoLayoutHorizontal}
                                onPress={() => navigation.navigate("Helpcenter")}>
                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/helpcenter.png')}
                                />
                                <Text style={styles.Txt385}>Help Center</Text>
                                <Image
                                    style={styles.IconlyLightArrowRight2}
                                    source={require('../assets/Profile/left.png')}
                                />
                            </Pressable>
                            <Pressable style={styles.AutoLayoutHorizontal}
                                onPress={() => navigation.navigate("Invite")}>
                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/invitefriends.png')}
                                />
                                <Text style={styles.Txt385}>Invite Friends</Text>
                                <Image
                                    style={styles.IconlyLightArrowRight2}
                                    source={require('../assets/Profile/left.png')}
                                />
                            </Pressable>
                            <Pressable style={styles.AutoLayoutHorizontal1}
                                onPress={() => navigation.navigate("SingIn")}>
                                {/* onPress={logOut}> */}
                                <Image
                                    style={styles.IconlyLightOutlineProfile}
                                    source={require('../assets/Profile/signin.png')}
                                />
                                <Text style={styles.Txt241}>Sign In</Text>
                            </Pressable>
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
    Profile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 1)",
        // width: '100%',
        // height: 900,
    },
    Group0: {
        display: "flex",
        flexDirection: "column",
    },
    AutoLayoutVertical1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        // width: 140,
    },
    AvatarThumbail: {
        width: 130,
        height: 130,
        marginBottom: 14,
        marginTop: 10
    },
    themeLightDividerIcon: {
        alignSelf: "stretch",
        position: "relative",
        maxWidth: "100%",
        overflow: "hidden",
        height: 1,
        flexShrink: 0,
      },
      mt16: {
        marginTop: 16,
        marginBottom:10
      },
    AutoLayoutVertical: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // width: 380,
    },
    Txt1: {
        fontSize: 24,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "700",
        lineHeight: 29,
        color: "rgba(33,33,33,1)",
        textAlign: "center",
        justifyContent: "center",
        width: 381,
    },
    Txt2: {
        fontSize: 14,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "600",
        lineHeight: 20,
        letterSpacing: 0.2,
        color: "rgba(33,33,33,1)",
        textAlign: "center",
        justifyContent: "center",
        width: 381,
    },
    AutoLayoutVertical2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // width: 380,
    },
    AutoLayoutHorizontal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 0,
        paddingRight: 0,
        marginBottom: 20,
        // width: 380,
    },
    IconlyLightOutlineProfile: {
        width: 24,
        height: 24,
        marginRight: 18,
        marginLeft: 10,
    },
    AutoLayoutHorizontal1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 0,
        paddingRight: 0,
        // width: 380,
    },
    Txt385: {
        fontSize: 18,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "700",
        lineHeight: 28,
        letterSpacing: 0.2,
        color: "black",
        width: 305,
        marginRight: 16,
    },
    IconlyLightArrowRight2: {
        width: 10,
        height: 20,
        marginRight:5
    },
    Txt2109: {
        fontSize: 18,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "700",
        lineHeight: 28,
        letterSpacing: 0.2,
        color: "rgba(33,33,33,1)",
        width: 145,
        marginRight: 16,
        bold :5
    },
    Txt241: {
        fontSize: 18,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "700",
        lineHeight: 25,
        letterSpacing: 0.2,
        color: "rgba(0,43,127,1)",
        width: 341,
    },
    Txt1108: {
        fontSize: 14,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "600",
        lineHeight: 20,
        letterSpacing: 0.2,
        color: "rgba(117,117,117,1)",
        textAlign: "right",
        justifyContent: "flex-end",
        width: 145,
        marginRight: 19,
    },
    IconlyLightOutlineHome: {
        width: 24,
        height: 24,
        marginBottom: 2,
    },
})