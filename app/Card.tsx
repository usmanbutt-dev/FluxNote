import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Card() {
    return (
        <View style={styles.container}>

            <Text style={styles.noteName}>
                Untitled Note
            </Text>
            <Pressable style={styles.deleteButton}>
                <Feather
                    name="trash-2"
                    size={24}
                    color="lightgray"
                />
            </Pressable>

            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.noteDescription}>
                Meeting notes template. Let's make sure Zustand is hooked with the expo-sqlite local driver properly. Meeting notes template. Let's make sure Zustand is hooked with the expo-sqlite local driver properly.
            </Text>

            <Text style={styles.noteDate}>
                {new Date().toLocaleDateString()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#738196",
        borderWidth: 1,
        borderRadius: 20,
        paddingBottom: 20,
        marginHorizontal: 20,
        backgroundColor: "white",
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