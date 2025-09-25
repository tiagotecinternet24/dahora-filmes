// src/components/CardFilme.tsx
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { CardFilmeProps } from "../types";

export default function CardFilme({ filme }: CardFilmeProps) {
  // Extraindo cada prop de dentro do filme
  const { id, title, poster_path } = filme;

  return (
    <View style={estilos.card}>
      <Image
        source={
          // Se exister valor no poster_path, mostra imagem do filme
          // Senão, mostra a foto alternativa
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/original/${poster_path}` }
            : require("@/assets/foto-alternativa.jpg")
        }
        style={estilos.imagem}
      />

      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title} </Text>
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
    padding: 4,
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
