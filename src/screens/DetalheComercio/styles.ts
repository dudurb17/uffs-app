import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  comercioImage: {
    width: 81,
    height: 81,
    borderRadius: 100,
  },
  comercioNome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#026534",
  },
  infoRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
  },
  whatsappButton: {
    backgroundColor: "#026534",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    gap: 10,
  },
  whatsappText: {
    fontSize: 16,
    color: "white",
  },
  verMaisText: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#026534",
  },
  produtosTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#026534",
    marginBottom: 10,
  },
  produtosList: {
    gap: 10,
  },
  produtoItem: {
    width: 100,
    marginRight: 10,
  },
  produtoImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  produtoPreco: {
    color: "#026534",
    fontWeight: "bold",
  },
});
