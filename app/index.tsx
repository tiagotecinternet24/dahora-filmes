import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false, headerTitle: "Home" }} />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image
            source={require("../assets/dahora.png")}
            style={estilos.logo}
          />
          <Text style={estilos.tituloApp}>Dá Hora Filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Link href="/busca" asChild>
            <Pressable style={estilos.botaoInicial}>
              <Ionicons name="search" size={18} color="white" />
              <Text style={estilos.textoBotao}> Buscar Filmes</Text>
            </Pressable>
          </Link>

          <Link href="/favoritos" asChild>
            <Pressable style={estilos.botaoInicial}>
              <Ionicons name="star" size={18} color="gold" />
              <Text style={estilos.textoBotao}> Favoritos</Text>
            </Pressable>
          </Link>
        </View>
        <View style={estilos.viewRodape}>
          <Link href="/privacidade" asChild>
            <Pressable style={estilos.botaoRodape}>
              <Ionicons name="lock-closed" size={18} color="white" />
              <Text style={estilos.textoBotao}> Privacidade</Text>
            </Pressable>
          </Link>

          <Link href="/sobre" asChild>
            <Pressable style={estilos.botaoRodape}>
              <Ionicons name="information-circle" size={18} color="white" />
              <Text style={estilos.textoBotao}> Sobre</Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  tituloApp: {
    fontSize: 32,
    color: "#5451a6",
    fontFamily: "Monoton",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  botaoInicial: {
    backgroundColor: "#5451a6",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textoBotao: {
    color: "white",
  },
  viewRodape: {
    backgroundColor: "#5451a6",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
  botaoRodape: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});
