import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Main: undefined;
  DetalheComercio: { id: number };
  InfoComercio: { id: number };
};

export type DetalheComercioNavigationProp = NativeStackNavigationProp<
  RootStackParamList
>;