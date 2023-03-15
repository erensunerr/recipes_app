import {Image, Text, View, TouchableOpacity} from "react-native";
import styles from "./styles";
import React from "react";
import {useNavigation} from "@react-navigation/native";

function CondensedRecipeCard(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={[styles.condensed_recipe_card, props.first && styles.condensed_recipe_card_first, props.style]}
            onPress={() => navigation.navigate('Details', {
                id: props.id
            })}
            activeOpacity={0.5}
        >
            <View style={styles.condensed_recipe_card_image_container}>
                <Image
                    source={{
                        uri: props.image_source
                    }}
                    style={styles.condensed_recipe_card_image}
                />
            </View>
            <Text style={styles.condensed_recipe_card_title}>{props.title}</Text>
            <View style={styles.condensed_recipe_card_time_section}>
                {/*    Time     */}
                {
                    props.time_required ?
                    <>
                        <Text style={styles.condensed_recipe_card_time_label}>Time</Text>
                        <Text style={styles.condensed_recipe_card_time}>{props.time_required} mins</Text>
                    </> : null
                }

            </View>
        </TouchableOpacity>
    );
}

export default CondensedRecipeCard;