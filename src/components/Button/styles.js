import {StyleSheet} from "react-native";
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: colors.green,
        borderRadius: 8,
    },
    text: {
        color: colors.white,
        fontFamily: "Inconsolata_700Bold",
        fontSize: 20,
    }
});

export default styles;