// app/resultados.tsx
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { ParametrosBusca } from "../src/types";

export default function Resultados() {
  const { filme } = useLocalSearchParams<ParametrosBusca>();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: `Resultados`,
        }}
      />

      <SafeAreaView style={estilos.container}>
        <Text style={estilos.texto}>
          Você buscou por: <Text style={estilos.termo}>{filme}</Text>
        </Text>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  viewFilmes: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingBottom: 32,
  },
  coluna: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    marginVertical: 8,
  },
  termo: {
    fontWeight: "bold",
    color: "#5451a6",
    fontSize: 18,
  },
});
