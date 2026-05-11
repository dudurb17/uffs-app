import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/types/NavigatorType";
import { Comercio, comercios, produtos, Produto } from "../../db/data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function DetalheComercio() {
  const route = useRoute<RouteProp<RootStackParamList, "DetalheComercio">>();
  const { id } = route.params;
  const [comercioCurrent, setComercioCurrent] = useState<Comercio>();
  const [produtosCurrent, setProdutosCurrent] = useState<Produto[]>([]);
  const edges = useSafeAreaInsets();

  useEffect(() => {
    const comercioCurrent = comercios.find((comercio) => comercio.id === id);
    const produtosCurrent = produtos.filter(
      (produto) => produto.comercioId === id,
    );
    setProdutosCurrent(produtosCurrent);
    setComercioCurrent(comercioCurrent);
  }, []);

  return (
    <View style={{ paddingTop: edges.top, flex: 1, marginHorizontal: 20 }}>
      <View style={{ alignItems: "center", marginTop: 20, gap: 10 }}>
        <Image
          source={comercioCurrent?.image}
          style={{ width: 81, height: 81, borderRadius: 100 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#026534" }}>
          {comercioCurrent?.nome}
        </Text>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>5,5 km - Entrega Padrão</Text>
          <Text style={{ fontSize: 16 }}>{comercioCurrent?.nota}</Text>
          <FontAwesome name="star" size={20} color="orange" />
        </View>
        <View
          style={{
            backgroundColor: "#026534",
            flexDirection: "row",
            padding: 10,
            borderRadius: 10,
            gap: 10,
          }}
        >
          <FontAwesome name="whatsapp" size={20} color="white" />
          <Text style={{ fontSize: 16, color: "white" }}>
            Chamar no Whatsapp
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              textDecorationLine: "underline",
              color: "#026534",
            }}
          >
            Ver mais
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#026534", marginBottom: 10 }}>
          Produtos
        </Text>
        <FlatList
          data={produtosCurrent}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <View style={{width:100, marginRight: 10}}>
              <Image
                source={item.image}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <Text numberOfLines={1}>{item?.descricao}</Text>
              <Text numberOfLines={1} style={{color: "#026534", fontWeight: "bold"}}>R$: {item?.preco}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
