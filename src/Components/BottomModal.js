import { StyleSheet, Text, View ,Modal} from 'react-native'
import React from 'react'

export default function BottomModal(props) {
    const { container } = props
    return (

       

            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
                onRequestClose={() => {
                    //Alert.alert("Modal has been closed.");
                }}>

                <View
                    style={[container, { flex: 1, }]}
                >
                   
                        
                        {props.children}
                  
                </View>

            </Modal>
      

    );
}

const styles = StyleSheet.create({})