import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: "center",
    gap: 20,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#026534",
  },
  comercioImage: {
    width: 341,
    height: 168,
    borderRadius: 20,
  },
  mapsButton: {
    backgroundColor: "#026534",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    gap: 10,
    paddingHorizontal: 30,
  },
  whiteText: {
    fontSize: 16,
    color: "white",
  },
  descricaoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#026534",
    alignSelf: "flex-start",
  },
  descricaoText: {
    fontSize: 16,
    textAlign: "justify",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#026534",
  },
  contatoCard: {
    backgroundColor: "#026534",
    borderRadius: 20,
    padding: 10,
    width: "100%",
    gap: 5,
    paddingVertical: 20,
    paddingLeft: 30,
  },
  contatoRow: {
    flexDirection: "row",
    gap: 10,
  },
});
