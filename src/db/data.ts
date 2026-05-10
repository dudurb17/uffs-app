import { ImageSourcePropType } from "react-native";

type Destaque = {
  id: number;
  preco: string;
  image: ImageSourcePropType;
  descricao: string;
  marca: string;
};
type Comercio = {
  id: number;
  nome: string;
  image: ImageSourcePropType;
  descricao: string;
  telefone: string;
  instagram: string;
  email: string;
};

export const comercios: Comercio[] = [
  {
    id: 1,
    nome: "Tree",
    image: require("../assets/images/comercio_cogumelo.png"),
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    telefone: '(48) 99999-9999', 
    instagram: 'cogumelo@',
    email: 'cogumelo@gmail.com'
  },
  {
    id: 2,
    nome: "Nature",
    image: require("../assets/images/comercio_suco.png"),
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    telefone: '(48) 99999-9934', 
    instagram: 'suco@',
    email: 'suco@gmail.com'
  },
  {
    id: 3,
    nome: "Geleia",
    image: require("../assets/images/comercio_geleia.png"),
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    telefone: '(48) 99999-9934', 
    instagram: 'geleia@',
    email: 'geleia@gmail.com'
  },
];

export const destaques: Destaque[] = [
  {
    id: 1,
    preco: "33,00",
    image: require("../assets/images/amendoin.png"),
    descricao: "Amendoin",
    marca: "Tree",
  },
  {
    id: 2,
    preco: "7,90",
    image: require("../assets/images/suco.png"),
    descricao: "Suco de uva 1L",
    marca: "Sucos Zottenelli",
  },
  {
    id: 3,
    preco: "12,50",
    image: require("../assets/images/cogumelo.png"),
    descricao: "Cogumelo fresco",
    marca: "Verde Alegre",
  },
];
