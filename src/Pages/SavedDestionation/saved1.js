import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";

const Saved = (props) => {
    const navigation = useNavigation();

    return (
        <Header
            {...props}
            rightIcon={false}
            // isBackground={true}
            title={"Saved Destination"}
        >
            <View style={styles.container}>
                <View style={styles.savedDestination03View}>
                    {/* <Pressable
                        style={styles.buttonPressable}
                        onPress={() => navigation.navigate("Addresspage")}
                    >
                        <View style={styles.buttonBasePrimaryView}>
                            <Text style={styles.text}>Continue</Text>
                        </View>
                    </Pressable> */}
                    <View style={styles.autoLayoutVertical4}>
                        <View style={styles.autoLayoutVertical3}>
                            <Text style={styles.selectWhereDoYouWantToSa}>
                                Select where do you want to save the address of quicklink
                            </Text>
                           
                            <View style={[styles.autoLayoutHorizontal3, styles.mt24]}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',borderColor:'blue' }} onPress={() => navigation.navigate("Addresspage")}>
                                <View style={styles.featureIconView1}>
                                    <View style={styles.featureIconView}>
                                        <View style={styles.autoLayoutHorizontal}>
                                            <Image
                                                style={styles.iconlyBoldHome}
                                                resizeMode="cover"
                                                source={require("../../assets/SavedDestionation/iconlyboldhome3.png")}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.autoLayoutVertical, styles.ml20]}>
                                    <Text style={styles.saveAtText}>Save At</Text>
                                    <Text style={styles.homeText}>Home</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                           
                            <View style={[styles.autoLayoutHorizontal3, styles.mt24]}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',borderColor:'blue' }} onPress={() => navigation.navigate("Addresspage")}>
                                <View style={styles.featureIconView3}>
                                    <View style={styles.featureIconView2}>
                                        <View style={styles.autoLayoutHorizontal2}>
                                            <Image
                                                style={styles.iconlyBoldStar}
                                                resizeMode="cover"
                                                source={require("../../assets/SavedDestionation/iconlyboldstar.png")}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.autoLayoutVertical1, styles.ml20]}>
                                    <Text style={styles.saveAtText1}>Save At</Text>
                                    <Text style={styles.placesText}>Places</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.autoLayoutHorizontal5, styles.mt24]}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',borderColor:'blue' }} onPress={() => navigation.navigate("Addresspage")}>
                                <View style={styles.featureIconView5}>
                                    <View style={styles.featureIconView4}>
                                        <View style={styles.autoLayoutHorizontal4}>
                                            <Image
                                                style={styles.iconlyBoldWork}
                                                resizeMode="cover"
                                                source={require("../../assets/SavedDestionation/iconlyboldwork.png")}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.autoLayoutVertical2, styles.ml20]}>
                                    <Text style={styles.saveAtText2}>Save At</Text>
                                    <Text style={styles.workText}>Work</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Header>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    ml20: {
        marginLeft: 20,
    },
    mt24: {
        marginTop: 24,
    },
    ml14: {
        marginLeft: 14,
    },
    text: {
        position: "relative",
        fontSize: 18,
        letterSpacing: 0.2,
        lineHeight: 28,
        fontWeight: "600",
        fontFamily: "Urbanist, sans-serif",
        color: "#fff",
        textAlign: "center",
    },
    buttonBasePrimaryView: {
        flex: 1,
        borderRadius: 100,
        backgroundColor: "#0f437b",
        borderStyle: "solid",
        borderColor: "#0f437b",
        borderWidth: 1,
        flexDirection: "row",
        paddingHorizontal: 28,
        paddingVertical: 16,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonPressable: {
        position: "absolute",
        top: 718,
        left: 24,
        width: 380,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    selectWhereDoYouWantToSa: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 18,
        letterSpacing: 0.2,
        lineHeight: 25,
        fontWeight: "500",
        fontFamily: "Urbanist, sans-serif",
        color: "#212121",
        textAlign: "left",
    },
    iconlyBoldHome: {
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
    },
    autoLayoutHorizontal: {
        borderRadius: 1000,
        backgroundColor: "#002b7f",
        flexDirection: "row",
        padding: 8,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
    },
    featureIconView: {
        borderRadius: 100,
        backgroundColor: "#b0bdd7",
        width: 52,
        height: 52,
        flexShrink: 0,
        flexDirection: "row",
        padding: 8,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
    },
    featureIconView1: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    saveAtText: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 12,
        letterSpacing: 0.2,
        fontWeight: "500",
        fontFamily: "Urbanist, sans-serif",
        color: "#757575",
        textAlign: "left",
    },
    homeText: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 16,
        letterSpacing: 0.2,
        lineHeight: 22,
        fontWeight: "700",
        fontFamily: "Urbanist, sans-serif",
        color: "#000",
        textAlign: "left",
    },
    autoLayoutVertical: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    autoLayoutHorizontal1: {
        alignSelf: "stretch",
        borderRadius: 20,
        backgroundColor: "rgba(0, 43, 127, 0.03)",
        shadowColor: "rgba(4, 6, 15, 0.05)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 60,
        elevation: 60,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#002b7f",
        borderWidth: 3,
        flexDirection: "row",
        padding: 24,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    iconlyBoldStar: {
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
    },
    autoLayoutHorizontal2: {
        borderRadius: 1000,
        backgroundColor: "#002b7f",
        flexDirection: "row",
        padding: 8,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
    },
    featureIconView2: {
        borderRadius: 100,
        backgroundColor: "#b0bdd7",
        width: 52,
        height: 52,
        flexShrink: 0,
        flexDirection: "row",
        padding: 8,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
    },
    featureIconView3: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    saveAtText1: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 12,
        letterSpacing: 0.2,
        fontWeight: "500",
        fontFamily: "Urbanist, sans-serif",
        color: "#757575",
        textAlign: "left",
    },
    placesText: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 16,
        letterSpacing: 0.2,
        lineHeight: 22,
        fontWeight: "700",
        fontFamily: "Urbanist, sans-serif",
        color: "#000",
        textAlign: "left",
    },
    autoLayoutVertical1: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    autoLayoutHorizontal3: {
        alignSelf: "stretch",
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "rgba(4, 6, 15, 0.05)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 60,
        elevation: 60,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#eee",
        borderWidth: 1,
        flexDirection: "row",
        padding: 24,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    iconlyBoldWork: {
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
    },
    autoLayoutHorizontal4: {
        borderRadius: 1000,
        backgroundColor: "#002b7f",
        flexDirection: "row",
        padding: 8,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
    },
    featureIconView4: {
        borderRadius: 100,
        backgroundColor: "#b0bdd7",
        width: 52,
        height: 52,
        flexShrink: 0,
        flexDirection: "row",
        padding: 8,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
    },
    featureIconView5: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    saveAtText2: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 12,
        letterSpacing: 0.2,
        fontWeight: "500",
        fontFamily: "Urbanist, sans-serif",
        color: "#757575",
        textAlign: "left",
    },
    workText: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 16,
        letterSpacing: 0.2,
        lineHeight: 22,
        fontWeight: "700",
        fontFamily: "Urbanist, sans-serif",
        color: "#000",
        textAlign: "left",
    },
    autoLayoutVertical2: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    autoLayoutHorizontal5: {
        alignSelf: "stretch",
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "rgba(4, 6, 15, 0.05)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 60,
        elevation: 60,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#eee",
        borderWidth: 1,
        flexDirection: "row",
        padding: 24,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    autoLayoutVertical3: {
        alignSelf: "stretch",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    autoLayoutVertical4: {
        position: "absolute",
        top: 10,
        right: 0,
        left: 0,
        flexDirection: "column",
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 48,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text1: {
        position: "absolute",
        marginTop: -11,
        top: "50%",
        left: 23,
        fontSize: 16,
        letterSpacing: 0.2,
        lineHeight: 22,
        fontWeight: "600",
        fontFamily: "Urbanist, sans-serif",
        color: "#121212",
        textAlign: "left",
    },
    groupIcon: {
        position: "absolute",
        marginTop: -4,
        top: "50%",
        right: 76,
        width: 18,
        height: 10,
    },
    groupIcon1: {
        position: "absolute",
        marginTop: -5,
        top: "50%",
        right: 55.73,
        width: 15.27,
        height: 10.97,
    },
    groupIcon2: {
        position: "absolute",
        marginTop: -6,
        top: "50%",
        right: 23.02,
        width: 26.98,
        height: 13,
    },
    statusBarView: {
        position: "relative",
        width: 428,
        height: 44,
        flexShrink: 0,
    },
    icon: {
        width: "100%",
        height: "100%",
        flexShrink: 0,
    },
    iconlyLightArrowLeft: {
        position: "relative",
        width: 28,
        height: 28,
    },
    text2: {
        position: "relative",
        fontSize: 24,
        lineHeight: 29,
        fontWeight: "700",
        fontFamily: "Urbanist, sans-serif_semibold",
        color: "#212121",
        textAlign: "left",
    },
    contentView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    topAppBar: {
        width: 428,
        height: 64,
        flexShrink: 0,
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingVertical: 0,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    topAppBar1: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    topAppBar2: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    savedDestination03View: {
        position: "relative",
        // backgroundColor: "#fff",
        flex: 1,
        // width: "100%",
        // height: 926,
        overflow: "hidden",
    },
});

export default Saved;
