import React, {useState, useEffect, useContext, useMemo} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";


import styles from "./styles";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import CategoriesList from "../../components/CategoriesList";
import RecipeCard from "../../components/RecipeCard";
import CondensedRecipeCard from '../../components/CondensedRecipeCard';
import { RecipesContext } from "../../../App";
import { preprocessRecipes } from "../../http";

// const CATEGORIES = [
//     'Trending',
//     'Seasonal',
//     'Chocoholic',
//     'Diet',
//     'Daily',
// ]
//
// const FEATURED_RECIPES = [
//     {
//         id: 10010,
//         title: "Steak with Mashed Potatoes",
//         image_source: 'https://cdn.shopify.com/s/files/1/0506/2600/3116/products/peppercornsteakroundplate.png?v=1655985136',
//         rating: 4,
//         profile_image_source: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
//         user_name: 'Alex Smith',
//         time_required: 35,
//     },
//     {
//         id: 10020,
//         title: 'Chicken Wings',
//         image_source: 'https://static.wixstatic.com/media/9e921c_3357e7d3aa0f4ab8b4f86c4a64a4454e~mv2.png/v1/fill/w_692,h_518,al_c,lg_1,q_85,enc_auto/Buffalo_thumbnail.png',
//         rating: 3,
//         profile_image_source: 'https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg',
//         user_name: 'Johnny Abelheid',
//         time_required: 20,
//     }
// ]

const Home = ({ navigation }) => {

    let { recipes, featuredRecipes } = useContext(RecipesContext);

    recipes = useMemo(() => preprocessRecipes(recipes), [recipes]);
    featuredRecipes = useMemo(() => preprocessRecipes(featuredRecipes), [featuredRecipes]);

    // Extract categories from recipes.
    const categories = [
        ...new Set(recipes.reduce(
            (prev, recipe) => [...prev, ...recipe["tags"]],
            ['All']))
            ]

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    if (selectedCategory !== 'All') {
        // filter recipes
        recipes = recipes.filter(
            (recipe) => recipe.tags.includes(selectedCategory)
        )
    }

    return (
        <ScrollView style={styles.container}>
            <SearchBar
                onPress={() => navigation.navigate('Search')}
                style={[styles.subtitle, styles.withMargin]}
                pressable
            />
            <Title
                text={'Healthy Recipes'}
                style={[styles.subtitle, styles.withMargin]}
            />

            {/*     Featured Recipes Scroll View        */}
            <ScrollView
                style={styles.featured_recipes}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    featuredRecipes.map(
                        (recipe) => <RecipeCard {...recipe} key={`${recipe.id}`} />
                    )
                }
            </ScrollView>
            <CategoriesList
                categories={categories}
                selected={selectedCategory}
                onSelect={(category) => setSelectedCategory(category)}
            />
            {/*     Recipes Section     */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.recipes}>
                {
                    recipes.map(
                        (recipe, index) => (
                            <CondensedRecipeCard first={index === 0} {...recipe} key={`${recipe.id}`} />
                        )
                    )
                }
            </ScrollView>
        </ScrollView>
    );
};

export default Home;