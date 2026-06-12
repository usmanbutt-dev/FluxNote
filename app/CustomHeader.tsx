import Feather from '@expo/vector-icons/Feather';
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomHeader() {
    return (
        <View style={styles.container}>

            <View style={styles.leftContainer}>
                <Feather
                    style={styles.avatar}
                    name="user"
                    size={40}
                    color="black"
                />
            </View>

            <View style={styles.middleContainer}>
                <Text style={styles.greeting}>Welcome Back,</Text>
                <Text style={styles.username}>Jane Doe</Text>
            </View>

            <View style={styles.rightContainer}>
                <Pressable style={styles.settings} onPress={() => alert("Settings")}>
                    <Feather
                        name="settings"
                        size={20}
                        color="black"
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderStyle: "solid",
        borderColor: "black",
        flexDirection: "row",
        paddingVertical: 15,
    },

    leftContainer: {
        flex: 0.25,
        borderStyle: "solid",
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },

    middleContainer: {
        flex: 0.5,
        borderStyle: "solid",
        borderColor: "black",
        justifyContent: "center",
    },

    rightContainer: {
        flex: 0.25,
        borderStyle: "solid",
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        borderRadius: 25,
        borderStyle: "solid",
        borderColor: "black",
    },
    greeting: {
        fontSize: 10,
        color: "gray",
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    settings: {
        borderStyle: "solid",
        padding: 10,
        borderColor: "#E3E9F0",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#f2f7ffff",
    },

})