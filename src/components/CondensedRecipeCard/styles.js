import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    condensed_recipe_card: {
        marginHorizontal: 12,
        marginTop: 64,
        backgroundColor: colors.light_gray,
        padding: 16,
        paddingTop: 64,
        borderRadius: 16,
        width: 192,
        height: 192*1.1,
        justifyContent: "space-between",
    },
    condensed_recipe_card_first: {
        marginLeft: 24,
    },
    condensed_recipe_card_image_container: {
        position: "absolute",
        top: -64,
        flexDirection: "row",
        justifyContent: "center",
        width: '100%',
        marginHorizontal: 16,
    },
    condensed_recipe_card_image: {
        height: 128,
        width: 128,
        borderRadius: 100,
    },
    condensed_recipe_card_title: {
        fontFamily: 'Inconsolata_700Bold',
        fontSize: 20,
        textAlign: "center",
        marginTop: 24,
    },
    condensed_recipe_card_time_section: {
        position: "absolute",
        bottom: 16,
        left: 16,
    },
    condensed_recipe_card_time_label: {
        fontFamily: 'Inconsolata_400Regular',
        textTransform: "uppercase",
    },
    condensed_recipe_card_time: {
        marginTop: 4,
        fontFamily: 'Inconsolata_700Bold',
    }

});

export default styles;