import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { cocktails } from "../cocktails.js";
import Cocktail from "../components/Cocktail";

function compareAlphabeticalAscending(a, b) {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0;
}

let sortedCocktails = cocktails.sort(compareAlphabeticalAscending);

export function ListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000000" style="light" />
            <FlatList
                data={sortedCocktails}
                renderItem={({ index, item }) => {
                    return <Cocktail
                        id={item.id}
                        name={item.name}
                        short={item.short}
                        image={item.image}
                    ></Cocktail>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#aaa",
    },
});
