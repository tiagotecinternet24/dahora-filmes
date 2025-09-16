import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={estilos.loading}>
      <ActivityIndicator size={100} />
    </View>
  );
}

const estilos = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
