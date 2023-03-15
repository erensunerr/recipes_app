import {Image, ScrollView, Text, View} from "react-native";
import {useContext} from "react";
import {RecipesContext} from "../../../App";
import styles from "./styles";
import Title from "../../components/Title";

const NUTRITION_FIELDS = [
    "calories",
    "sugar",
    "protein"
]

const Details = ({ navigation, route }) => {
    console.log(route.params.id)
    const {recipes, featuredRecipes} = useContext(RecipesContext);

    const filtered_recipes = [...recipes, ...featuredRecipes].filter(({ id }) => id === route.params.id);

    console.log(filtered_recipes);
    let recipe;

    if (filtered_recipes.length === 0) {
        return (
            <View>Recipe not found :(</View>
        )
    } else {
        recipe = filtered_recipes[0];
    }

    let {thumbnail_url, name, nutrition, instructions, recipes: recipes_for_instructions, description} = recipe;

    if (recipes_for_instructions) {
        // This object is a compilation object
        instructions = recipes_for_instructions[0]['instruction']
    }

    console.log(description);

    return (
        <ScrollView
            style={[styles.scrollContainer, styles.withMargin]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingVertical: 48,}}
        >
            <Image source={{
                uri: thumbnail_url
            }} style={styles.image}/>
            <Title text={name} style={styles.title} />
            {
                // Check if nutrition sub-object exists
                nutrition && Object.keys(nutrition).length !== 0 ?
                    NUTRITION_FIELDS.map(
                        (field) =>
                        <View style={styles.nutrition_bar} key={field}>
                            <Text style={styles.nutrition_title}>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
                            <Text style={styles.nutrition_value}>{nutrition[field]}</Text>
                        </View>
                    ) :
                    null
            }

            {
                // TODO: add description
                description ? (
                    <View style={styles.description}>
                        <Text style={styles.description_text}>{description}</Text>
                    </View>
                    )
                 : null
            }


            {
                // Check if the instructions sub-object exists
                instructions ? (
                    <>
                        <Title text={'Instructions'} style={[styles.title, {fontSize: 20}]}/>
                        {
                            instructions.map(
                                ({ display_text }, i) => (<View style={styles.instruction} key={display_text}>
                                    <Text style={styles.instruction_label}>{i}</Text>
                                    <Text style={styles.instruction_text}>{display_text}</Text>
                                </View>)
                            )
                        }
                    </>

                ) : null
            }

        </ScrollView>
    )
}

export default Details;