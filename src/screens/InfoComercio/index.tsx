import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/types/NavigatorType";
import { comercios } from "../../db/data";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function InfoComercio() {
  const route = useRoute<RouteProp<RootStackParamList, "InfoComercio">>();
  const { id } = route.params;
  const edges = useSafeAreaInsets();
  const comercioCurrent = comercios.find((comercio) => comercio.id === id);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: edges.top,
        flex: 1,
        marginHorizontal: 20,
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#026534" }}>
        {comercioCurrent?.nome}
      </Text>
      <Image
        source={comercioCurrent?.image}
        style={{ width: 341, height: 168, borderRadius: 20 }}
        resizeMode="cover"
      />
      <View
        style={{
          backgroundColor: "#026534",
          flexDirection: "row",
          padding: 10,
          borderRadius: 10,
          gap: 10,
          paddingHorizontal: 30,
        }}
      >
        <FontAwesome name="map-marker" size={20} color="white" />
        <Text style={{ fontSize: 16, color: "white" }}>
          Abrir no Google Maps
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#026534",
          alignSelf: "flex-start",
        }}
      >
        Descrição
      </Text>
      <Text style={{ fontSize: 16, textAlign: "justify" }}>
        {comercioCurrent?.descricao}
      </Text>
      <View style={{ width: "100%", height: 1, backgroundColor: "#026534" }} />
      <View
        style={{
          backgroundColor: "#026534",
          borderRadius: 20,
          padding: 10,
          width: "100%",
          gap: 5,
          paddingVertical: 20,
          paddingLeft: 30,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <FontAwesome name="whatsapp" size={20} color="white" />
          <Text style={{ fontSize: 16, color: "white" }}>
            {comercioCurrent?.telefone}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <FontAwesome name="instagram" size={20} color="white" />
          <Text style={{ fontSize: 16, color: "white" }}>
            {comercioCurrent?.instagram}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <FontAwesome name="envelope" size={20} color="white" />
          <Text style={{ fontSize: 16, color: "white" }}>
            {comercioCurrent?.email}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
