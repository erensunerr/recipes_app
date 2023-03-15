import {ScrollView, Text, View, TouchableOpacity} from "react-native";
import styles from "./styles";
import React from "react";

function CategoriesList({ categories, selected, onSelect }) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryList}
        >
        {
            categories.map(
                (category, index) => (
                    <TouchableOpacity
                        key={category}
                        style={[
                            styles.category,
                            index === 0 && styles.category_first,
                            index === categories.length - 1 && styles.category_last,
                            category === selected && styles.category_selected
                        ]}
                        onPress={() => onSelect(category)}
                    >
                        <Text style={[
                            styles.category_text,
                            category === selected && styles.category_text_selected
                        ]}>{category}</Text>
                    </TouchableOpacity>
                )
            )
        }
    </ScrollView>);
}

export default CategoriesList;