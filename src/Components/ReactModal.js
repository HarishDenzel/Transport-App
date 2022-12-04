import React from "react";
import { Button, Text, View, ScrollView, Modal } from "react-native";


const ReactModal = (props) => {
    const { container } = props
    return (

       

            <Modal
                animationType="fade"
                transparent={true}
                visible={props.visible}
                onRequestClose={() => {
                    //Alert.alert("Modal has been closed.");
                }}>

                <View
                    style={[container, { flex: 1, padding:20 }]}
                >
                   
                        
                        {props.children}
                  
                </View>

            </Modal>
      

    );
};
export default ReactModal;