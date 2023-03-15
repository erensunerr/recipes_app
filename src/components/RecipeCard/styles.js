import {StyleSheet} from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: colors.white,
        marginTop: 24,
        marginHorizontal: 24,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    card_top_row: {
        flexDirection: "row",
        // backgroundColor: "yellow",
        height: 48,
    },
    card_title: {
        fontSize: 20,
        color: colors.black,
        marginBottom: 12,
        width: 200,
    },
    card_image: {
        width: 96,
        height: 96,

        position: 'relative',
        top: -48,
        right: -8,
        borderRadius: 100,
    },

    card_rating: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    card_rating_star: {
        marginRight: 2,
    },

    card_bio: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    card_bio_image: {
        width: 24,
        height: 24,
        marginRight: 8,
        borderRadius: 100,
    },
    card_bio_text: {
        fontFamily: 'Inconsolata_400Regular',
        color: colors.gray,
    },
    card_timer: {
        marginRight: 8,
    }
})

export default styles;