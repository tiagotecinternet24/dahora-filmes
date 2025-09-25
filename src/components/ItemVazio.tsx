// src/components/ItemVazio.tsx
import { Text, StyleSheet } from "react-native";

export default function ItemVazio() {
  return <Text style={estilos.texto}>Nenhum filme encontrado.</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#888",
  },
});
