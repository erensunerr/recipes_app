import React, {useState, useContext, useMemo} from 'react';
import {FlatList, SafeAreaView, Text, View} from "react-native";
import SearchBar from "../../components/SearchBar";
import styles from "./styles";
import Title from "../../components/Title";
import CondensedRecipeCard from "../../components/CondensedRecipeCard";
import {RecipesContext} from "../../../App";
import {preprocessRecipes} from "../../http";

const Search = (props) => {
    const [searchString, setSearchString] = useState('');

    let { recipes, featuredRecipes } = useContext(RecipesContext);

    recipes = useMemo(() => preprocessRecipes(recipes), [recipes]);
    featuredRecipes = useMemo(() => preprocessRecipes(featuredRecipes), [featuredRecipes]);


    const search_results = searchString.length > 0 ? [...recipes, ...featuredRecipes].filter(
        (recipe) => recipe["title"].toLowerCase().includes(searchString.toLowerCase())
    ) : [];

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar value={searchString} onChangeText={setSearchString} autoFocus />
            <View style={styles.title}>
                <Title
                    text={'Search Results'}
                />
                <Text style={styles.search_count}>{search_results.length} results</Text>
            </View>
            <FlatList
                data={search_results}
                renderItem={
                    ({ item }) => (
                        <CondensedRecipeCard {...item} style={styles.condensed_recipe_card} />
                    )
                }
                keyExtractor={(c) => c.id}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between', marginTop: 32,}}
                showsVerticalScrollIndicator={false}
            />
    </SafeAreaView>
    );
}

export default Search;