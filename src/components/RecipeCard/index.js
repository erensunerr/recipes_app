import React from "react";
import {Image, Text, TouchableOpacity, TouchableHighlight, View} from "react-native";
import {FontAwesome, Ionicons} from '@expo/vector-icons';

import colors from "../../constants/colors";
import styles from "./styles";
import Title from "../Title";
import {VERSION} from "axios";
import {useNavigation} from "@react-navigation/native";

function RecipeCard(props) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', {
                id: props.id
            })}
            style={styles.card}
            activeOpacity={0.5}
        >
            <View>
            <View style={styles.card_top_row}>
                <Title
                    text={props.title}
                    numberOfLines={1}
                    style={styles.card_title}
                />
                <Image
                    source={{
                        uri: props.image_source
                    }}
                    style={styles.card_image}
                />
            </View>
            {
                props.rating ? (
                    <View style={styles.card_rating}>
                        {/*    Ratings      */}
                        {
                            // Filled Stars
                            [...Array(props.rating).keys()].map(
                                (x, i) => (
                                    <FontAwesome
                                        name="star"
                                        size={16}
                                        color="#fcbe03"
                                        style={styles.card_rating_star}
                                        key={i}
                                    />
                                )
                            )
                        }
                        {
                            // Empty Stars
                            [...Array(5 - props.rating).keys()].map(
                                (x, i) => (
                                    <FontAwesome
                                        name="star-o"
                                        size={16}
                                        color="#fcbe03"
                                        style={styles.card_rating_star}
                                        key={i}
                                    />
                                )
                            )
                        }
                    </View>
                ) : (<View />)
            }

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                {/*    Last Row with Profile and Time      */}
                <View style={styles.card_bio}>
                    {/*        Profile     */}
                    {
                        props.profile_image_source &&
                        <Image
                            style={styles.card_bio_image}
                            source={{
                                uri: props.profile_image_source
                            }}
                        />
                    }
                    <Text style={styles.card_bio_text}>
                        By {props.user_name}
                    </Text>
                </View>

                    {/*     Time Required       */}
                    {
                        props.time_required ?
                        (
                        <View style={styles.card_bio}>
                            <Ionicons name="timer-outline" size={24} color={colors.gray} style={styles.card_timer}/>
                            <Text style={styles.card_bio_text}>{props.time_required} mins</Text>
                        </View>
                        ) : <View />
                    }
            </View>
            </View>
        </TouchableOpacity>
    );
}

export default RecipeCard;