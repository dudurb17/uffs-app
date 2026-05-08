import { ImageSourcePropType } from "react-native";

type Destaque = {
  id: number;
  preco: string;
  image: ImageSourcePropType;
  descricao: string;
  marca: string;
}
export const destaques: Destaque[]  =[ 
  {
    id: 2,
    preco: "7,90",
    image: require("../assets/suco.png"),
    descricao: "Suco de uva 1L",
    marca: "Sucos Zottenelli",
  },
  {
    id: 3,
    preco: "12,50",
    image: require("../assets/cogumelo.png"),
    descricao: "Cogumelo fresco",
    marca: "Verde Alegre",
  }
]