import { StyleSheet } from "react-native";
import colors from '../../constants/colors';

import {Dimensions} from "react-native";

const { height: phone_height } = Dimensions.get('window');

const styles = StyleSheet.create({
    scrollContainer: {
    },
    withMargin: {
        marginHorizontal: 24,
    },
    image: {
        width: '100%',
        height: phone_height / 4,
        backgroundColor: 'red',
        borderRadius: 12,
    },
    title: {
        marginVertical: 16,
    },
    nutrition_bar: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.light_gray,
        padding: 12,
        paddingVertical: 8,
        marginTop: 8,
        borderRadius: 8,
    },
    nutrition_title: {
        fontFamily: 'Inconsolata_400Regular',
    },
    nutrition_value: {
        fontFamily: 'Inconsolata_400Regular',
        color: '#606060',
    },
    instruction: {
        flexDirection: "row",
        marginBottom: 24,
    },
    instruction_label: {
        alignSelf: "center",
        textAlign: "center",
        fontFamily: 'Inconsolata_700Bold',
        fontSize: 24,
        color: colors.gray,
    },
    instruction_text: {
        marginLeft: 24,
        fontFamily: 'Inconsolata_400Regular',
        fontSize: 16,
    },
    description_text: {
        fontFamily: 'Inconsolata_400Regular',
        fontSize: 16,
    }
});

export default styles;