import {TextInput, View, Pressable} from "react-native";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import colors from '../../constants/colors';


function SearchBar(props) {

    const renderInput = () => (
        <View style={[styles.searchBar, props.style]}>
            <Ionicons name="search" size={18} color={colors.gray}/>
            <TextInput
                style={styles.searchBarInput}
                value={props.value}
                onChangeText={props.onChangeText}
                placeholder={"Search here"}
                placeholderTextColor={colors.gray}
                editable={!props.pressable}
                onPressIn={props.onPress}
                autoFocus={props.autoFocus}
            />
        </View>
    )
    if (props.pressable) {
        return (
            <Pressable
                onPressIn={props.onPress}
            >
                {
                    renderInput()
                }
            </Pressable>
        )
    }
    return (
            renderInput()
    );
}

export default SearchBar;