import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";

export default function CardList() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>YOUR NOTES</Text>
            <Card />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F1F5F9",
    },
    heading: {
        paddingHorizontal: 20,
        paddingTop: 10,
        fontSize: 12,
        fontWeight: "bold",
        color: "#98A6BB",
        marginBottom: 10,
    },
})