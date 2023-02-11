import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
    useFonts,
    Inconsolata_400Regular,
    Inconsolata_700Bold
} from '@expo-google-fonts/inconsolata';


import Start from "./src/screens/Start";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {

    // Load Fonts
  const [fontsLoaded] = useFonts({
    Inconsolata_400Regular, Inconsolata_700Bold
  });


  if (!fontsLoaded) {
      return null;
  }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={'Start'} component={Start} />
            <Stack.Screen name={'Home'} component={Home} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}