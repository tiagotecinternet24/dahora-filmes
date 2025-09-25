// src/components/CardFilme.tsx
import { StyleSheet, Text, View, Pressable } from "react-native";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";

export default function CardFilme() {
  return (
    <View style={estilos.card}>
      {/* Imagem do filme... */}
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> Titulo do filme... </Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} /> Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="add-circle" size={12} /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },
  imagem: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  corpo: {
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  titulo: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  botao: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#5451a6",
    borderRadius: 4,
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
