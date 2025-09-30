// app/favoritos.tsx
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Filme, ItemDaListaDeFavoritosProps } from "@/src/types";
import {
  apagarTodosFavoritos,
  buscarFavoritos,
  removerFilmeFavorito,
} from "@/src/services/storage-favoritos";
import Loading from "@/src/components/Loading";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    buscarFavoritos()
      .then((lista) => {
        setFavoritos(lista);
      })
      .catch((erro) => console.error("Erro ao carregar os filmes:" + erro))
      .finally(() => setLoading(false));
  }, []);

  console.log(favoritos);

  const itemDaListaDeFavoritos = ({ item }: ItemDaListaDeFavoritosProps) => (
    <Pressable
      style={estilos.item}
      onPress={() => {
        router.push({
          pathname: "/detalhes/[id]",
          params: {
            filme: JSON.stringify(item),
          },
        });
      }}
    >
      <Text style={estilos.titulo}>{item.title}</Text>
      <Pressable
        style={estilos.botaoLixeira}
        // Ao chamar uma função (no caso, removerFilme) que necessite de parâmetros (no caso, item.id), obrigatoriamente, a prop de evento (onPress) deve usar a sintaxe com arrow function
        onPress={() => removerFilme(item.id)}
      >
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

  const removerFilme = async (id: number) => {
    try {
      // Executamos a remoção do filme no storage
      await removerFilmeFavorito(id);

      // Carregamos novamente a lista de filmes (já sem o filme excluído)
      const lista = await buscarFavoritos();

      // Atualizamos o state de favoritos com a nova lista
      setFavoritos(lista);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível remover o filme");
    }
  };

  const apagarTudo = () => {
    Alert.alert(
      "❗Apagar todos os favoritos",
      "Tem certeza que deseja apagar todos os filmes favoritos?",
      [
        { text: "Não", style: "cancel" },
        {
          text: "Sim",
          onPress: async () => {
            try {
              await apagarTodosFavoritos();
              setFavoritos([]);
            } catch (error) {
              console.error(error);
              Alert.alert("Erro", "Não foi possível apagar os favoritos");
            }
          },
        },
      ]
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Meus Favoritos",
          headerRight: () =>
            favoritos.length > 0 && (
              <Pressable onPress={apagarTudo}>
                <Ionicons name="trash" size={24} color="#fff" />
              </Pressable>
            ),
        }}
      />
      <SafeAreaView style={estilos.container}>
        {loading ? (
          <Loading />
        ) : (
          <View style={estilos.viewLista}>
            <FlatList
              data={favoritos}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={itemDaListaDeFavoritos}
              ListEmptyComponent={ListaVazia}
            />
          </View>
        )}
      </SafeAreaView>
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
