import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { cocktails } from "../cocktails.js";
import Cocktail from "../components/Cocktail";
import React from "react";

function compareAlphabeticalAscending(a, b) {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0;
}

let sortedCocktails = cocktails.sort(compareAlphabeticalAscending);
let displayedCocktails = sortedCocktails;

function hasIngredient(cocktail, text) {
    let ingredientsContained = 0
    Object.keys(cocktail.ingredients).forEach(ingredient => {
        if(ingredient.toLowerCase().includes(text.toLowerCase())){
            ingredientsContained++;
        };
    });
    if(ingredientsContained > 0) {
        return true;
    } else {
        return false;
    }
}

function filterList(text) {
    // console.log("Text changed", text);
    // TODO Add filter for multiple search terms, e.g. "lemon" AND "gin"

    displayedCocktails = sortedCocktails.filter(cocktail => {
        return cocktail.name.toLowerCase().includes(text.toLowerCase()) ||
            cocktail.glassware.toLowerCase().includes(text.toLowerCase()) ||
            cocktail.garnish.toLowerCase().includes(text.toLowerCase()) ||
            cocktail.method.toLowerCase().includes(text.toLowerCase()) ||
            cocktail.ice.toLowerCase().includes(text.toLowerCase()) ||
            hasIngredient(cocktail, text)
    });
}

export function ListScreen({ navigation }) {
    const [text, setText] = React.useState("");

    return (
        <View style={styles.listContainer}>
            <StatusBar backgroundColor="#000" style="light" />
            <FlatList
                data={displayedCocktails}
                renderItem={({ index, item }) => {
                    return <Cocktail
                        id={item.id}
                        name={item.name}
                        short={item.short}
                        image={item.image}
                    ></Cocktail>
                }}
            />
            <View style={styles.floatBar}>
                <View style={styles.floatContainer}>
                    <TextInput
                        style={styles.floatSearch}
                        onChangeText={newText => {
                            setText(newText);
                            filterList(newText);
                        }}
                        value={text}
                        placeholder="Search for cocktails"
                        placeholderTextColor="#444"
                        selectionColor="#444"
                        textAlign="center"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#aaa",
    },
    floatBar: {
        position: "absolute",
        bottom: "2%",
        left: "4%",
        width: "92%",
        padding: "4%",
        borderRadius: 10,
        backgroundColor: "#888",
        
    },
    floatContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    floatSearch: {
        flex: 1,
        fontSize: 25,
    }
});
