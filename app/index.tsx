import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const isAuthenticated = false;

  return (!isAuthenticated) ? (
    <Redirect href="/welcome" />
  ) : (
    <Redirect href="/(tabs)/home" />
  );
}
