import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

interface Note {
    id: number;
    title: string;
    description: string;
    date: string;
}

export default function CardList() {
    const db = useSQLiteContext()

    const [notes, setNotes] = useState<Note[]>([])

    useEffect(() => {
        db.getAllAsync<Note>("SELECT * FROM notes ORDER BY id DESC")
            .then((res) => setNotes(res))
            .catch((error) => console.log("Error Fetching Notes: ", error))
    }, [db])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>YOUR NOTES</Text>
            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContent}
                data={notes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card item={item} />
                )}
            />
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
    list: {
        // borderWidth: 1,
        // borderColor: "black",
    },
    listContent: {
        gap: 10,
    }
})