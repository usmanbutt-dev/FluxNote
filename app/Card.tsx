import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Card({ item }: { item: any }) {
    return (
        <View style={styles.container}>

            <Text style={styles.noteName}>
                {item.title}
            </Text>
            <Pressable style={styles.deleteButton}>
                <Feather
                    name="trash-2"
                    size={24}
                    color="#99A7BB"
                />
            </Pressable>

            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.noteDescription}>
                {item.description}
            </Text>

            <Text style={styles.noteDate}>
                {item.date}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderColor: "#738196",
        // borderWidth: 0.1,
        borderRadius: 20,
        paddingBottom: 20,
        marginHorizontal: 20,
        backgroundColor: "white",
        shadowColor: "#A1ACBA",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4.65,
        elevation: 4,
    },
    noteName: {
        // borderColor: "black",
        // borderWidth: 1,
        padding: 15,
        fontWeight: "bold",
        fontSize: 16,
        color: "#253041",
    },
    noteDescription: {
        // borderColor: "black",
        // borderWidth: 1,
        paddingLeft: 15,
        paddingRight: 25,
        fontSize: 14,
        color: "#8490A3",
        height: 50,
    },
    noteDate: {
        // borderColor: "black",
        // borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 20,
        alignSelf: "flex-start",
        color: "#8490A3",
    },
    deleteButton: {
        padding: 5,
        // borderColor: "black",
        // borderWidth: 1,
        position: "absolute",
        right: 10,
        top: 10,
    }
})