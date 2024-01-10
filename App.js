import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar style="auto" />
      {/* Main Design Starts from here */}
      <Text>Demo Text</Text>
    </View>
  );
}
