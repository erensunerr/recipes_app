import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import {NavigationContainer, useNavigation, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
    useFonts,
    Inconsolata_400Regular,
    Inconsolata_700Bold
} from '@expo-google-fonts/inconsolata';


import Start from "./src/screens/Start";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

import { Ionicons } from '@expo/vector-icons';
import Search from "./src/screens/Search";
import {createContext, useState, useEffect} from "react";
import {getRecipesList} from "./src/http";


const Stack = createNativeStackNavigator();
export const RecipesContext = createContext();


const RecipesTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#ffffff',

    }
}

const NUM_RECIPES = 24;

SplashScreen.preventAutoHideAsync();



export default function App() {

    // Load Fonts
  const [fontsLoaded] = useFonts({
    Inconsolata_400Regular, Inconsolata_700Bold
  });

  const [recipes, setRecipes] = useState([]);
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  useEffect( // Get recipes to use in home
    () => {
        try {
            getRecipesList().then(
                (data) => {
                    setRecipes(
                        data["results"].slice(0, NUM_RECIPES)
                    )
                }
            )

            // feature healthy recipes
            getRecipesList(['healthy']).then(
                (data) => {
                    setFeaturedRecipes(
                        data["results"].slice(0, NUM_RECIPES)
                    )
                }
            )
        } catch (e) {
            console.log('Recipe fetch error.', e)
        }

    }
    , []
  )

    if (!fontsLoaded) {
        return null;
    } else {
        SplashScreen.hideAsync();
    }

  return (
      <RecipesContext.Provider value={{ recipes, setRecipes, featuredRecipes, setFeaturedRecipes }}>
        <NavigationContainer theme={RecipesTheme}>
            <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center',
                headerLeft: (props) => (<>
                        <BackButton {...props} />
                        <StatusBar />
                    </>),
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontFamily: 'Inconsolata_700Bold',
                }
            }}>
                <Stack.Screen name={'Start'} component={Start} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name={'Home'} component={Home} options={{
                    headerBackVisible: false,
                    headerLeft: null,
                    gestureEnabled: false,
                }}/>

                <Stack.Screen name={'Search'} component={Search} options={{
                    title: 'Search Recipes'
                }}/>
                <Stack.Screen name={'Details'} component={Details} />

            </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
  );
}

const BackButton = (props) => {
    const nav = useNavigation();
    return (
        <Ionicons  name="arrow-back" size={32} color="black" onPress={() => props.canGoBack && nav.goBack()}/>
    );
};