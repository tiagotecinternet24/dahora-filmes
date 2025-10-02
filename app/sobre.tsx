import { Stack } from "expo-router";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Sobre() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Sobre o App" }} />
      <View style={estilos.container}>
        <ScrollView>
          <View style={estilos.card}>
            <Image
              source={require("../assets/dahora.png")}
              style={estilos.logo}
            />
            <Text style={estilos.titulo}>Dá Hora Filmes!</Text>
            <Text style={estilos.subtitulo}>Versão 1.0.0</Text>
            <Text style={estilos.paragrafo}>
              O Dá Hora Filmes! é um aplicativo para você buscar, descobrir e
              salvar seus filmes favoritos. Mantenha-se atualizado sobre o mundo
              do cinema de forma rápida e intuitiva.
            </Text>
          </View>

          <View style={estilos.card}>
            <Image
              source={require("@/assets/logo-tmdb.png")}
              style={estilos.logo}
            />

            <Text style={estilos.subtitulo}>The Movie Database (TMDb)</Text>

            <Text style={estilos.paragrafo}>
              As informações sobre os filmes são coletadas e atualizadas a
              partir da base de dados pública disponibilizada pelo site The
              Movie Database
            </Text>
          </View>

          <View style={estilos.rodape}>
            <Text style={estilos.textoRodape}>
              Desenvolvido por DAHORA-2025.
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 28,
    fontFamily: "Monoton",
    marginBottom: 5,
    color: "#333",
  },
  subtitulo: {
    fontSize: 16,
    color: "#888",
    marginBottom: 15,
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    textAlign: "center",
  },
  rodape: {
    marginTop: 40,
    alignItems: "center",
  },
  textoRodape: {
    fontSize: 14,
    color: "#aaa",
  },
});
