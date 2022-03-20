import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { cocktails } from "../cocktails.js";
import Cocktail from "../components/Cocktail";

export function ListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000000" style="light" />
            <FlatList
                data={cocktails}
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
        flexDirection: "row",
        backgroundColor: "#aaa",
        alignItems: "center",
    },
});
