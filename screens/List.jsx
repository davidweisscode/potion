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
                        key={item.id}
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
        backgroundColor: "#aaaaaa",
        alignItems: "center",
        // justifyContent: "center",
        // paddingBottom: 20,
    },
});
