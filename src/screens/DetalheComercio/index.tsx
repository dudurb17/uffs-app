import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { DetalheComercioNavigationProp, RootStackParamList } from "../../routes/types/NavigatorType";
import { Comercio, comercios, produtos, Produto } from "../../db/data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";

export default function DetalheComercio() {
  const route = useRoute<RouteProp<RootStackParamList, "DetalheComercio">>();
  const { id } = route.params;
  const [comercioCurrent, setComercioCurrent] = useState<Comercio>();
  const [produtosCurrent, setProdutosCurrent] = useState<Produto[]>([]);
  const edges = useSafeAreaInsets();
  const navigation = useNavigation<DetalheComercioNavigationProp>();

  useEffect(() => {
    const comercioCurrent = comercios.find((comercio) => comercio.id === id);
    const produtosCurrent = produtos.filter(
      (produto) => produto.comercioId === id,
    );
    setProdutosCurrent(produtosCurrent);
    setComercioCurrent(comercioCurrent);
  }, []);

  return (
    <View style={[styles.container, { paddingTop: edges.top }]}>
      <View style={styles.header}>
        <Image
          source={comercioCurrent?.image}
          style={styles.comercioImage}
        />
        <Text style={styles.comercioNome}>
          {comercioCurrent?.nome}
        </Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>5,5 km - Entrega Padrão</Text>
          <Text style={styles.infoText}>{comercioCurrent?.nota}</Text>
          <FontAwesome name="star" size={20} color="orange" />
        </View>
        <View style={styles.whatsappButton}>
          <FontAwesome name="whatsapp" size={20} color="white" />
          <Text style={styles.whatsappText}>
            Chamar no Whatsapp
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("InfoComercio", { id: comercioCurrent?.id ?? 0})}>
          <Text style={styles.verMaisText}>
            Ver mais
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.produtosTitle}>
          Produtos
        </Text>
        <FlatList
          data={produtosCurrent}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.produtosList}
          renderItem={({ item }) => (
            <View style={styles.produtoItem}>
              <Image
                source={item.image}
                style={styles.produtoImage}
              />
              <Text numberOfLines={1}>{item?.descricao}</Text>
              <Text numberOfLines={1} style={styles.produtoPreco}>R$: {item?.preco}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
