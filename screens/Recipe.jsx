import { StyleSheet, Button, View, Text, Image } from "react-native";
import { cocktails } from "../cocktails.js";
import { images } from "../images.js";

export function RecipeScreen({ route, navigation }) {
    const { name } = route.params;

    let recipe = cocktails.find(cocktail => cocktail.name === name)

    return (
        <View style={styles.container}>
            <Image source={images[recipe.image]} style={styles.image}></Image>
            <Text style={styles.name}>{recipe.name}</Text>
            <View style={{ flex: 1, width: "100%" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1, flexDirection: "column", padding: 5, borderColor: "black", borderWidth: 1, borderStyle: "solid", borderRadius: 0, margin: 2 }}>
                        <Text style={{fontWeight: "bold"}}>Glass: </Text>
                        <Text>{recipe.glassware}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "column", padding: 5, borderColor: "black", borderWidth: 1, borderStyle: "solid", borderRadius: 0, margin: 2 }}>
                        <Text style={{fontWeight: "bold"}}>Ice: </Text>
                        <Text>{recipe.ice}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1, flexDirection: "column", padding: 5, borderColor: "black", borderWidth: 1, borderStyle: "solid", borderRadius: 0, margin: 2 }}>
                        <Text style={{fontWeight: "bold"}}>Method: </Text>
                        <Text>{recipe.method}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "column", padding: 5, borderColor: "black", borderWidth: 1, borderStyle: "solid", borderRadius: 0, margin: 2 }}>
                        <Text style={{fontWeight: "bold"}}>Garnish: </Text>
                        <Text>{recipe.garnish}</Text>
                    </View>
                </View>
                <View style={{ flex: 2, padding: 5, borderColor: "black", borderWidth: 1, borderStyle: "solid", borderRadius: 0, margin: 2 }}>
                    {Object.entries(recipe.ingredients).map(([key, value]) => {
                        return (
                            <View style={styles.ingredientRow}>
                                <Text style={styles.ingredient} key={key}>{key}</Text>
                                <Text style={styles.ingredient} key={value}>{value}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={{ flex: 1, flexDirection: "column", padding: 5, borderColor: "black", borderWidth: 1, borderStyle: "solid", borderRadius: 0, margin: 2 }}>
                    <Text style={{fontWeight: "bold"}}>Optional: </Text>
                    <Text>{recipe.optional}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5%",
        backgroundColor: "lightgrey",
    },
    image: {
        width: 300,
        height: 300,
        tintColor: "#000",
    },
    name: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
    },
    ingredientRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ingredient: {
        
    },
})
