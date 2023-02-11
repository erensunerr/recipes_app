import {StyleSheet, Dimensions} from "react-native";


const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    imageBackground: {
        width,
        height,
    },
    safeAreaView: {
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 64,
        marginTop: 32,
    },
    logoView: {
        alignItems: "center",
    },
    titleView: {
        alignItems: "center",
    },
    button: {
        marginTop: 64,
    }
})

export default styles;