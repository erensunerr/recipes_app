import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 24,
        flexGrow: 1,
    },
    title: {
        marginVertical: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    search_count: {
        fontFamily: 'Inconsolata_400Regular'
    },
    condensed_recipe_card: {
        marginHorizontal: 0,
        width: '48%',
    },
    search_results: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: 'red',

    },

})

export default styles;