import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchBar} placeholder="Search Notes..." />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#F1F5F9",
        // borderColor: "black",
        // borderWidth: 1,

    },
    searchBar: {
        borderStyle: "solid",
        borderColor: "#E3E9F0",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 20,
        backgroundColor: "#F3F6FA",
        fontSize: 14,
        color: "#D3DAE4",
    }
})