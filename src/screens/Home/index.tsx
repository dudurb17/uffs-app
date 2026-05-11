import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { produtos, comercios } from "../../db/data";
import { useNavigation } from "@react-navigation/native";
import { DetalheComercioNavigationProp } from "../../routes/types/NavigatorType";

export default function Home() {
  const edges = useSafeAreaInsets();
  const navigation = useNavigation<DetalheComercioNavigationProp>();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          width: "100%",
          paddingTop: edges.top,
          backgroundColor: "#026534",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      >
        <View
          style={{
            padding: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FontAwesome name="bars" size={24} color="white" />
          <Image
            source={require("../../assets/images/oeste_organicos.png")}
            style={{ width: 100, height: 30 }}
          />
          <FontAwesome name="search" size={24} color="white" />
        </View>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={{ width: "100%", height: 170 }}>
          <Image
            source={require("../../assets/images/banner.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={{ marginBottom: 5, fontSize: 14, color: "#026534" }}>
            Comércios Próximos
          </Text>
          <FlatList
            data={comercios}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("DetalheComercio", { id: item.id })}>
                <Image
                  source={item.image}
                  style={{ width: 100, height: 100, borderRadius: 20 }}
                />
              </TouchableOpacity>
            )}
          />
          <Text style={{ marginBottom: 5, fontSize: 14, color: "#026534" }}>
            Destaques
          </Text>
          <FlatList
            data={produtos.filter((produto) => produto.destaque)}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#026534",
                  borderRadius: 5,
                  padding: 10,
                  width: 120,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 100, height: 90, borderRadius: 5 }}
                />
                <View style={{ marginTop: 10, gap: 3 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#CAFF62",
                    }}
                  >
                    R$: {item.preco}
                  </Text>
                  <Text
                    style={{ fontSize: 10, fontWeight: "bold", color: "white" }}
                  >
                    {item.descricao}
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "#CAFF62",
                    }}
                    numberOfLines={1}
                  >
                    {item.marca}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
