import {StyleSheet} from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    categoryList: {
        marginVertical: 24,
    },
    category: {
        marginRight: 12,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 8,
    },
    category_first: {
        marginLeft: 24,
    },
    category_last: {
      marginRight: 24,
    },
    category_selected: {
        backgroundColor: colors.dark_green,
    },
    category_text: {
        fontFamily: 'Inconsolata_700Bold',
        color: colors.dark_green,
    },
    category_text_selected: {
        color: colors.white,
    }
})

export default styles;