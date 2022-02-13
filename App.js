import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { cocktails } from "./cocktails.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListScreen } from "./screens/List";
import { RecipeScreen } from "./screens/Recipe";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="List"
                screenOptions={{
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: "tomato" },
                }}
            >
                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={({ route }) => ({
                        title: "Potion",
                        headerStyle: {
                            backgroundColor: "#888888",
                        },
                        headerTintColor: "#222",
                        headerTitleStyle: {
                            fontWeight: "bold",
                            fontSize: 30,
                            // fontFamily: TODO,
                            color: "#555",
                        },
                        headerShadowVisible: true,
                        headerTransparent: false,
                        headerTitleAlign: "center",
                        animationTypeForReplace: "push",
                        animation: "slide_from_right",
                    })}
                />
                <Stack.Screen
                    name="Recipe"
                    component={RecipeScreen}
                    options={({ route }) => ({
                        title: route.params.name,
                        headerStyle: {
                            backgroundColor: "#888888",
                        },
                        headerTintColor: "#222",
                        headerTitleStyle: {
                            fontWeight: "bold",
                            fontSize: 30,
                            // fontFamily: TODO,
                            color: "#555",
                        },
                        headerShadowVisible: true,
                        headerTransparent: false,
                        headerTitleAlign: "center",
                        animationTypeForReplace: "push",
                        animation: "slide_from_right",
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
