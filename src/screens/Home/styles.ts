import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#026534",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerContent: {
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bannerWrapper: {
    width: "100%",
    height: 170,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    marginBottom: 5,
    fontSize: 14,
    color: "#026534",
  },
  horizontalList: {
    gap: 10,
  },
  comercioImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  destaqueCard: {
    backgroundColor: "#026534",
    borderRadius: 5,
    padding: 10,
    width: 120,
  },
  destaqueImage: {
    width: 100,
    height: 90,
    borderRadius: 5,
  },
  destaqueInfo: {
    marginTop: 10,
    gap: 3,
  },
  destaquePreco: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#CAFF62",
  },
  destaqueDescricao: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
  destaqueMarca: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#CAFF62",
  },
});
