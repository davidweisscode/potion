import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { images } from "../images.js";
import { useNavigation } from '@react-navigation/native';

export default function Cocktail(props) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.item}
            key={props.key}
            onPress={() => navigation.navigate('Recipe', {
                name: props.name, // pass a prop as param
            })}
            activeOpacity={0.6}>
            <View style={styles.text}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.short}>{props.short}</Text>
            </View>
            <Image source={images[props.image]} style={styles.image}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "4%",
        marginVertical: "2%",
        padding: "5%",
        borderRadius: 20,
        backgroundColor: "lightgrey",
        shadowColor: 'red',
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 0},
        shadowRadius: 10,
        elevation: 10,
        borderColor: "gold",
        borderWidth: 1,
    },
    text: {
        justifyContent: "center",
        maxWidth: "80%",
        // backgroundColor: "#ffa",
        borderColor: "red",
        borderWidth: 1
    },
    name: {
        fontSize: 32,
        fontWeight: "bold",
        backgroundColor: "#bbbbbb",
    },
    short: {
        fontSize: 16,
        fontStyle: "normal",
        backgroundColor: "#cccccc",
    },
    image: {
        // position: "absolute",
        // right: "1%",
        // maxWidth: "20%",
        // maxHeight: "20%",
        width: 110,
        height: 110,
        backgroundColor: "#ddd",
        tintColor: "#000",
        borderColor: "blue",
        borderWidth: 1,
    }
})
