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
        backgroundColor: "lightgrey",
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'white',
    },
    text: {
        justifyContent: "center",
        maxWidth: "80%", // workaround: wrap longer names
    },
    name: {
        fontSize: 32,
        fontWeight: "bold",
    },
    short: {
        fontSize: 16,
        fontStyle: "normal",
    },
    image: {
        width: 110,
        height: 110,
        tintColor: "#000",
    }
})
