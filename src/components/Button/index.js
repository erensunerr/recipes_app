import React from "react";
import {Text, TouchableOpacity} from "react-native";
import styles from "./styles";

function Button({ text, onPress, styles: passedStyles}) {
    return (
        <TouchableOpacity
            style={[styles.button, passedStyles]}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default React.memo(Button);