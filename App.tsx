import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <StatusBar style="auto" />
        <View style={estilos.viewLogo}>
          <Text>Dá Hora Filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Text>Botão 1</Text>
          <Text>Botão 2</Text>
        </View>
        <View style={estilos.viewRodape}>
          <Text>Botão 3</Text>
          <Text>Botão 4</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* Estilos */
const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#fff9c4",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  viewLogo: {
    backgroundColor: "lightgreen",
    flex: 3,
  },
  viewBotoes: {
    backgroundColor: "#ffcc80",
    flex: 2,
  },
  viewRodape: {
    backgroundColor: "#ef9a9a",
    flex: 0.5,
  },
});
