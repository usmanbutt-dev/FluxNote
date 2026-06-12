import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "./CustomHeader";
import HomeScreen from "./HomeScreen";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <HomeScreen />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }

})
