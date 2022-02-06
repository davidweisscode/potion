import { StyleSheet, Text, View, Image } from 'react-native';
import { images } from "../images.js";

export default function Cocktail(props) {
    return (
        <View style={styles.item} key={props.key}>
            <Text style={styles.name}>{props.name}</Text>
            {Object.entries(props.ingredients).map(([key, value]) => {
                return (
                    <Text style={styles.ingredient} key={props.key}>{key} {value}</Text>
                )
            })}
            <Image source={images[props.image]} style={styles.image}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
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
