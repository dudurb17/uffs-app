import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { produtos, comercios } from "../../db/data";
import { useNavigation } from "@react-navigation/native";
import { DetalheComercioNavigationProp } from "../../routes/types/NavigatorType";
import { styles } from "./styles";

export default function Home() {
  const edges = useSafeAreaInsets();
  const navigation = useNavigation<DetalheComercioNavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.headerWrapper, { paddingTop: edges.top }]}>
        <View style={styles.headerContent}>
          <FontAwesome name="bars" size={24} color="white" />
          <Image
            source={require("../../assets/images/oeste_organicos.png")}
            style={styles.logo}
          />
          <FontAwesome name="search" size={24} color="white" />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.bannerWrapper}>
          <Image
            source={require("../../assets/images/banner.png")}
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Comércios Próximos
          </Text>
          <FlatList
            data={comercios}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.horizontalList}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("DetalheComercio", { id: item.id })}>
                <Image
                  source={item.image}
                  style={styles.comercioImage}
                />
              </TouchableOpacity>
            )}
          />
          <Text style={styles.sectionTitle}>
            Destaques
          </Text>
          <FlatList
            data={produtos.filter((produto) => produto.destaque)}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.horizontalList}
            renderItem={({ item }) => (
              <View style={styles.destaqueCard}>
                <Image
                  source={item.image}
                  style={styles.destaqueImage}
                />
                <View style={styles.destaqueInfo}>
                  <Text style={styles.destaquePreco}>
                    R$: {item.preco}
                  </Text>
                  <Text style={styles.destaqueDescricao}>
                    {item.descricao}
                  </Text>

                  <Text style={styles.destaqueMarca} numberOfLines={1}>
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
