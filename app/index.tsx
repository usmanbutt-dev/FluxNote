import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "./CustomHeader";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <Text>FluxNote</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }

})
