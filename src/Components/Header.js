import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import GetImage from '../assets/GetImage';

export default function Header(props) {
    const height = Dimensions.get("screen").height;
    const navigation = useNavigation();
    const { title, onPress, righticon } = props
    return (
        <View style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
            <View
                style={styles.container}
            >
                <TouchableOpacity
                    onPress={() => props.navigation.goBack(null)}
                    style={styles.sub_Con}
                >
                    <Image
                        source={GetImage.leftArrow}
                        style={styles.img}
                    />
                </TouchableOpacity>
                <View style={{ flex: 0.85, justifyContent: "center" }}>
                    <Text
                        style={{
                            fontSize: (height / 100) * 2.2,
                            fontFamily: "Urbanist_semibold",
                            fontWeight: 'bold',
                            color: "#000"

                        }}
                    >
                        {title}
                    </Text>
                </View>
                {righticon &&
                    <TouchableOpacity
                        onPress={onPress}
                        style={{
                            flex: 0.1,
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                        <Image
                            source={GetImage.choose}
                            style={{
                                height: 15,
                                width: 15,
                                resizeMode: 'contain'
                            }}
                        />
                    </TouchableOpacity>}
            </View>
            <View style={righticon ? styles.margin : styles.sub_scroll}>

                {props.children}


            </View>
        </View>
    )
}
const height = Dimensions.get("screen").height;
const styles = StyleSheet.create({
    container: {
        flex: 0.05,
        flexDirection: "row",
        paddingTop: height / 100 * 2
    },
    sub_Con: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        height: 18,
        width: 18,
        resizeMode: "contain"
    },
    margin: {
        flex: 0.95,
        margin: 15
    },
    sub_scroll: {
        flex: 0.95,

      
    }

})