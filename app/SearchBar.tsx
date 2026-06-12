import { Feather } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
    return (
        <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="#98A6BB" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search Notes..."
                placeholderTextColor="#98A6BB"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F3F6FA",
        borderWidth: 1,
        borderColor: "#E3E9F0",
        borderRadius: 12,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 12,
        height: 48,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: "100%",
        fontSize: 14,
        color: "slategray",
    }
});
