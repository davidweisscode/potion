import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Cocktail from "./components/Cocktail";
import { cocktails } from "./cocktails.js";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.safecontainer}>
                <StatusBar backgroundColor="#000000" style="light" />
                <FlatList
                    data={cocktails}
                    renderItem={({ item }) => (
                        <Cocktail
                            key={item.id}
                            name={item.name}
                            ingredients={item.ingredients}
                            image={item.image}
                        ></Cocktail>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#aaaaaa",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    safecontainer: {
        // Status bar workaround
        marginTop: 100,
    },
});
