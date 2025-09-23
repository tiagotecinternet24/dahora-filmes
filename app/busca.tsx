// app/busca.tsx
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Busca() {
  // Hook para armazenar o filme digitado pelo usuário
  const [filme, setFilme] = useState<string>("");

  const buscarFilmes = () => {
    if (!filme) {
      return Alert.alert("Ops!", "Você deve digitar um filme!");
    }
  };

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
            value={filme}
            onChangeText={setFilme}
            onSubmitEditing={buscarFilmes}
          />
        </View>
        <Button title="Procurar" color="#5451a6" onPress={buscarFilmes} />
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
