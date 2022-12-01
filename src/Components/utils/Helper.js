import AsyncStorage from "@react-native-async-storage/async-storage";

const Helper = {
    async setData(key, val) {
        try {
            let tempval = JSON.stringify(val);
            await AsyncStorage.setItem(key, tempval);
        } catch (error) {
            console.error(error, "AsyncStorage")
        }
    },
    
    async getData(key) {
        try {
            let value = await AsyncStorage.getItem(key);
            if (value) {
                let newvalue = JSON.parse(value);
                return newvalue;
            } else {
                return value;
            }
        } catch (error) {
            console.error(error, "AsyncStorage")
        }
    },
    // async showLoader() {
    //     // Keyboard.dismiss();
    //     Helper.globalLoader.setState({ loader: true })
    // },

    // async hideLoader() {
    //     Helper.globalLoader.setState({ loader: false })
    // }
    async removeItemValue(key) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (exception) {
            return false;
        }
    }
    
}

export default Helper