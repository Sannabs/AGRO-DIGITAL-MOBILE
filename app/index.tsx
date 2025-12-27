import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View>
      <SafeAreaView>
        <Text className="text-black font-quicksand-bold text-2xl mt m-4">
          Hello Sanna, <Text className="text-blue-500">Welcome</Text>
        </Text>
      </SafeAreaView>
    </View>
  );
}
