// app/resultados.tsx
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Filme, ParametrosBusca } from "@/src/types";
import { useEffect, useState } from "react";
import { api } from "@/src/services/api";
import Loading from "@/src/components/Loading";
import CardFilme from "@/src/components/CardFilme";
import ItemVazio from "@/src/components/ItemVazio";

export default function Resultados() {
  const { filme } = useLocalSearchParams<ParametrosBusca>();

  // Criando um state para gerenciar a lista de filmes obtida da API
  const [resultados, setResultados] = useState<Filme[]>([]);

  // Criando um state para alternar a exibição de um Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!filme) return;

    // Ao começar as ações de busca na API, iniciamos o loading
    setLoading(true);

    api
      .get("/search/movie", {
        params: {
          language: "pt-BR",
          query: filme,
          include_adult: false,
        },
      })
      .then((resposta) => setResultados(resposta.data.results))
      .catch((err) => console.error(err))

      // Acabou o processo de busca? Mesmo com sucesso ou erro?
      // Então, finalmente, desative o loading
      .finally(() => setLoading(false));
  }, [filme]);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: `Resultados`,
        }}
      />

      <View style={estilos.container}>
        <Text style={estilos.texto}>
          Você buscou por: <Text style={estilos.termo}>{filme}</Text>
        </Text>

        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={resultados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CardFilme filme={item} />}
            numColumns={2}
            columnWrapperStyle={estilos.coluna}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ItemVazio}
          />
        )}
      </View>
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
