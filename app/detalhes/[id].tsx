// app/detalhes/[id].tsx
import { Stack } from "expo-router";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detalhes() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Detalhes do Filme",
        }}
      />

      <SafeAreaView style={estilos.container}>
        <ScrollView>
          <View style={estilos.imagemContainer}></View>
          <View style={estilos.corpo}>
            <Text style={estilos.titulo}></Text>
            <View style={estilos.viewDetalhes}>
              <Text style={estilos.detalhes}>⭐</Text>
              <Text style={estilos.detalhes}>📅</Text>
            </View>
            <Text style={estilos.sinopseTitulo}>Sinopse:</Text>
            <Text style={estilos.sinopse}></Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  erroTexto: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "red",
  },
  imagemContainer: {
    height: 250,
    overflow: "hidden",
    position: "relative",
  },
  imagem: {
    width: "100%",
    height: "100%",
  },
  corpo: {
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  viewDetalhes: { flexDirection: "row", justifyContent: "space-between" },
  detalhes: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  sinopseTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  sinopse: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
});
