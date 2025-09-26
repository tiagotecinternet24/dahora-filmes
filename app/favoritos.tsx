// app/favoritos.tsx
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Filme } from "@/src/types";
import { buscarFavoritos } from "@/src/services/storage-favoritos";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarFavoritos()
      .then((lista) => {
        setFavoritos(lista);
      })
      .catch((erro) => console.error("Erro ao carregar os filmes:" + erro))
      .finally(() => setLoading(false));
  }, []);

  console.log(favoritos);

  const itemDaListaDeFavoritos = () => (
    <Pressable style={estilos.item}>
      <Text style={estilos.titulo}>Titulo...</Text>
      <Pressable style={estilos.botaoLixeira}>
        <Ionicons name="trash" size={24} color="#888" />
      </Pressable>
    </Pressable>
  );

  const ListaVazia = () => (
    <View style={estilos.listaVaziaContainer}>
      <Text style={estilos.listaVaziaTexto}>
        Você ainda não favoritou nenhum filme.
      </Text>
    </View>
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Meus Favoritos",
        }}
      />
      <SafeAreaView style={estilos.container}></SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewLista: {
    marginVertical: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  titulo: {
    fontSize: 16,
    flex: 1,
  },
  botaoLixeira: {
    paddingLeft: 16,
  },
  listaVaziaContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  listaVaziaTexto: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
});
