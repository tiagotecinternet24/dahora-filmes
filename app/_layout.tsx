import { useFonts } from "expo-font";
import Loading from "../src/components/Loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function Layout() {
  const [fonteCarregada] = useFonts({
    Monoton: require("../assets/fonts/Monoton-Regular.ttf"),
  });

  if (!fonteCarregada) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5451a6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </SafeAreaProvider>
  );
}
