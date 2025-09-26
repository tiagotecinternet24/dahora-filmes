// src/components/CardFilme.tsx
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Alert,
  Vibration,
} from "react-native";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { CardFilmeProps } from "../types";
import { useRouter } from "expo-router";
import { salvarFilmeFavorito } from "../services/storage-favoritos";

export default function CardFilme({ filme }: CardFilmeProps) {
  // Extraindo cada prop de dentro do filme
  const { title, poster_path } = filme;

  // Importando o router para permitir a navegação através de programação
  const router = useRouter();

  const leiaMais = () => {
    router.push({
      pathname: "/detalhes/[id]",
      params: {
        // Convertemos o filme completo para string/json
        // enviamos como parâmetro para a rota de detalhes
        filme: JSON.stringify(filme),
      },
    });
  };

  const salvar = () => {
    salvarFilmeFavorito(filme)
      .then((salvou) => {
        if (salvou) {
          Alert.alert("Favoritos", "Filme salvo com sucesso!");
        } else {
          Alert.alert("Favoritos", "Filme já está nos favoritos!");
          Vibration.vibrate();
        }
      })
      .catch(() => {
        Alert.alert("Ops", "Erro ao salvar. Tente novamente");
        Vibration.vibrate(1000);
      });
  };

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
          <Pressable style={estilos.botao} onPress={leiaMais}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} /> Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao} onPress={salvar}>
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
