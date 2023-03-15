import { StyleSheet } from "react-native";
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    searchBar: {
        paddingHorizontal: 12,
        paddingVertical: 8,

        borderStyle: 'solid',
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    searchBarInput: {
        fontSize: 16,
        padding: 4,
        flex: 1,
        paddingLeft: 8,
        fontFamily: 'Inconsolata_400Regular',
    }
});

export default styles;