import { StyleSheet } from "react-native";
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        flex: 1,
    },
    withMargin: {
        marginHorizontal: 24,
    },
    subtitle: {
        marginVertical: 16,
    },
    featured_recipes: {
        paddingVertical: 12,
    },
    recipes: {
        paddingVertical: 12,
        paddingBottom: 64,
    },

    condensed_recipe_card: {
        marginHorizontal: 24,
        marginTop: 64,
        backgroundColor: '#e0e0e0',
        padding: 16,
        paddingTop: 64,
        borderRadius: 16,
        width: 192,
    },
    condensed_recipe_card_image: {
        height: 128,
        width: 128,
        position: "absolute",
        top: -64,
        left: 32,
    },
    condensed_recipe_card_title: {
        fontFamily: 'Inconsolata_700Bold',
        fontSize: 20,
        textAlign: "center",
        paddingVertical: 24,
    },
    condensed_recipe_card_time_section: {
        marginTop: 16,
    },
    condensed_recipe_card_time_label: {
        fontFamily: 'Inconsolata_400Regular',
        textTransform: "uppercase",
    },
    condensed_recipe_card_time: {
        marginTop: 4,
        fontFamily: 'Inconsolata_400Regular',

    }

});

export default styles;