import Feather from '@expo/vector-icons/Feather';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomHeader() {
    return (
        <View style={styles.container}>

            <View style={styles.leftContainer}>
                <Image
                    source={require("../assets/images/icon.png")}
                    style={styles.avatar}
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
                        size={24}
                        color="black"
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "lightpink",
        flex: 0.1,
        borderStyle: "solid",
        borderColor: "black",
        // borderWidth: 1,
        flexDirection: "row",
    },

    leftContainer: {
        flex: 0.25,
        borderStyle: "solid",
        borderColor: "black",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    middleContainer: {
        flex: 0.5,
        borderStyle: "solid",
        borderColor: "black",
        // borderWidth: 1,
        justifyContent: "center",
    },

    rightContainer: {
        flex: 0.25,
        borderStyle: "solid",
        borderColor: "black",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderStyle: "solid",
        borderColor: "black",
        // borderWidth: 0.5,
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
        borderColor: "black",
        padding: 10,
        // borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#f2f7ffff",
    },

})