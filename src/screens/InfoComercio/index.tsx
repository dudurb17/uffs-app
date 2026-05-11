import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/types/NavigatorType";
import { comercios } from "../../db/data";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";

export default function InfoComercio() {
  const route = useRoute<RouteProp<RootStackParamList, "InfoComercio">>();
  const { id } = route.params;
  const edges = useSafeAreaInsets();
  const comercioCurrent = comercios.find((comercio) => comercio.id === id);
  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingTop: edges.top }]}
    >
      <Text style={styles.nome}>
        {comercioCurrent?.nome}
      </Text>
      <Image
        source={comercioCurrent?.image}
        style={styles.comercioImage}
        resizeMode="cover"
      />
      <View style={styles.mapsButton}>
        <FontAwesome name="map-marker" size={20} color="white" />
        <Text style={styles.whiteText}>
          Abrir no Google Maps
        </Text>
      </View>
      <Text style={styles.descricaoTitle}>
        Descrição
      </Text>
      <Text style={styles.descricaoText}>
        {comercioCurrent?.descricao}
      </Text>
      <View style={styles.divider} />
      <View style={styles.contatoCard}>
        <View style={styles.contatoRow}>
          <FontAwesome name="whatsapp" size={20} color="white" />
          <Text style={styles.whiteText}>
            {comercioCurrent?.telefone}
          </Text>
        </View>
        <View style={styles.contatoRow}>
          <FontAwesome name="instagram" size={20} color="white" />
          <Text style={styles.whiteText}>
            {comercioCurrent?.instagram}
          </Text>
        </View>
        <View style={styles.contatoRow}>
          <FontAwesome name="envelope" size={20} color="white" />
          <Text style={styles.whiteText}>
            {comercioCurrent?.email}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
