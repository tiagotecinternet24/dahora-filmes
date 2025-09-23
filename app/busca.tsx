// app/busca.tsx
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Busca() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Busca de Filmes",
        }}
      />
      <SafeAreaView style={estilos.container}>
        <Text style={estilos.texto}>
          Star Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?
        </Text>
        <Text style={estilos.texto}>
          Localiza um filme que você viu ou gostaria de ver!
        </Text>
        <View style={estilos.viewForm}>
          <Ionicons name="film" size={44} />
          <TextInput
            placeholder="Digite o nome do filme"
            style={estilos.campo}
            inputMode="search"
          />
        </View>
        <Button title="Procurar" color="#5451a6" />
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
  },
  viewForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  campo: {
    borderWidth: 1,
    padding: 8,
    flex: 0.9,
    borderRadius: 5,
    borderColor: "#ccc",
  },
});
