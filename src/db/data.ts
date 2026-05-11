import { ImageSourcePropType } from "react-native";

export type Produto = {
  id: number;
  preco: string;
  image: ImageSourcePropType;
  descricao: string;
  marca: string;
  destaque: boolean;
  comercioId: number;
};
export type Comercio = {
  id: number;
  nome: string;
  image: ImageSourcePropType;
  descricao: string;
  telefone: string;
  instagram: string;
  email: string;
  nota: number;
};

export const comercios: Comercio[] = [
  {
    id: 1,
    nome: "Tree",
    image: require("../assets/images/comercio_cogumelo.png"),
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    telefone: '(48) 99999-9999', 
    instagram: 'cogumelo@',
    email: 'cogumelo@gmail.com', 
    nota: 4.2,
  },
  {
    id: 2,
    nome: "Nature",
    image: require("../assets/images/comercio_suco.png"),
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    telefone: '(48) 99999-9934', 
    instagram: 'suco@',
    email: 'suco@gmail.com',
    nota: 4.6,
  },
  {
    id: 3,
    nome: "Geleia",
    image: require("../assets/images/comercio_geleia.png"),
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    telefone: '(48) 99999-9934', 
    instagram: 'geleia@',
    email: 'geleia@gmail.com',
    nota: 4.9,
  },
];

export const produtos: Produto[] = [
  {
    id: 1,
    preco: "33,00",
    image: require("../assets/images/amendoin.png"),
    descricao: "Amendoin",
    marca: "Tree",
    destaque: true,
    comercioId: 1,
  },
  {
    id: 2,
    preco: "7,90",
    image: require("../assets/images/suco.png"),
    descricao: "Suco de uva 1L",
    marca: "Sucos Zottenelli",
    destaque: true,
    comercioId: 2,
  },
  {
    id: 3,
    preco: "12,50",
    image: require("../assets/images/cogumelo.png"),
    descricao: "Cogumelo fresco",
    marca: "Verde Alegre",
    destaque: true,
    comercioId: 3,
  },
  {
    id: 4,
    preco: "10,00",
    image: require("../assets/images/produtos/geleia1.png"),
    descricao: "Geleia de morango",
    marca: "Geleia Zottenelli",
    destaque: false,
    comercioId: 3,
  },
  {
    id: 5,
    preco: "12,00",
    image: require("../assets/images/produtos/geleia2.png"),
    descricao: "Geleia de morango",
    marca: "Geleia Zottenelli",
    destaque: false,
    comercioId: 3,
  }, 
  {
    id: 6,
    preco: "10,00",
    image: require("../assets/images/produtos/geleia3.png"),
    descricao: "Geleia de Abacaate",
    marca: "Geleia Zottenelli",
    destaque: false,
    comercioId: 3,
  },
  {
    id: 7,
    preco: "99,10",
    image: require("../assets/images/produtos/geleia4.png"),
    descricao: "Geleia de Abacaate",
    marca: "Geleia Zottenelli",
    destaque: false,
    comercioId: 1,
  },
  {
    id: 8,
    preco: "12,00",
    image: require("../assets/images/produtos/geleia5.png"),
    descricao: "Geleia de uva",
    marca: "Geleia Zottenelli",
    destaque: false,
    comercioId: 3,
  },
  {
    id: 9,
    preco: "12,00",
    image: require("../assets/images/produtos/geleia6.png"),
    descricao: "Geleia de uva",
    marca: "Geleia Zottenelli",
    destaque: false,
    comercioId: 3,
  },
];
