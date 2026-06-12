import { StyleSheet, View } from "react-native";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <SearchBar />
            <CardList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
    }
})