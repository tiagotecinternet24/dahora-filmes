import { useFonts } from "expo-font";
import Loading from "@/src/components/Loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  const [fonteCarregada] = useFonts({
    Monoton: require("@/assets/fonts/Monoton-Regular.ttf"),
  });

  if (!fonteCarregada) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

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
