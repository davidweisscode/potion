import { StyleSheet, Button, View, Text, Image } from "react-native";
import { cocktails } from "../cocktails.js";
import { images } from "../images.js";

export function RecipeScreen({ route, navigation }) {
    const { name } = route.params;

    let recipe = cocktails.find(cocktail => cocktail.name === name)

    return (
        <View style={styles.container}>
            <Text>Recipe Screen</Text>
            <Text>myParam: {name}</Text>
            {/* <Text>myParam: {JSON.stringify(name)}</Text> */}

            <Text style={styles.name}>{recipe.name}</Text>
            {Object.entries(recipe.ingredients).map(([key, value]) => {
                return (
                    <Text style={styles.ingredient} key={recipe.key}>{key} {value}</Text>
                )
            })}
            <Image source={images[recipe.image]} style={styles.image}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        padding: "5%",
        borderRadius: 20,
        backgroundColor: "lightgrey",
        marginHorizontal: "4%",
        marginVertical: "2%",
        minWidth: "90%",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        backgroundColor: "#bbbbbb",
    },
    ingredient: {
        fontSize: 16,
        backgroundColor: "#cccccc",
    },
    image: {
        // maxWidth: "20%",
        // maxHeight: "20%",
        width: 200,
        height: 200,
        backgroundColor: "#ddd",
        tintColor: "#000",
    }
})
