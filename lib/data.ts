export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  weight: string;
  category: string;
  stock: number;
  description: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Kelengkeng Super",
    image: "/images/kelengkeng-super.jpg",
    price: 35000,
    weight: "500 gram",
    category: "Best Seller",
    stock: 25,
    rating: 5,
    description:
      "Kelengkeng super dengan rasa manis, daging buah tebal, dan kualitas segar. Cocok untuk dikonsumsi bersama keluarga.",
  },

  {
    id: 2,
    name: "Kelengkeng Organik",
    image: "/images/kelengkeng-organik.jpg",
    price: 45000,
    weight: "500 gram",
    category: "Organik",
    stock: 18,
    rating: 5,
    description:
      "Kelengkeng organik pilihan dengan rasa manis dan segar. Diproses dengan memperhatikan kualitas buah.",
  },

  {
    id: 3,
    name: "Kelengkeng Premium",
    image: "/images/kelengkeng-premium.jpg",
    price: 55000,
    weight: "500 gram",
    category: "Premium",
    stock: 15,
    rating: 5,
    description:
      "Kelengkeng premium dengan ukuran buah besar, daging tebal, dan rasa manis yang nikmat.",
  },

  {
    id: 4,
    name: "Kelengkeng Jumbo",
    image: "/images/kelengkeng-jumbo.jpg",
    price: 60000,
    weight: "1 Kg",
    category: "Premium",
    stock: 12,
    rating: 5,
    description:
      "Kelengkeng jumbo dengan ukuran buah lebih besar dan cocok untuk hidangan keluarga.",
  },

  {
    id: 5,
    name: "Kelengkeng Lokal",
    image: "/images/kelengkeng-lokal.jpg",
    price: 30000,
    weight: "500 gram",
    category: "Segar",
    stock: 30,
    rating: 4,
    description:
      "Kelengkeng lokal segar dengan harga terjangkau dan rasa yang nikmat.",
  },

  {
    id: 6,
    name: "Paket Keluarga",
    image: "/images/kelengkeng-paket.jpg",
    price: 100000,
    weight: "2 Kg",
    category: "Paket Hemat",
    stock: 10,
    rating: 5,
    description:
      "Paket keluarga berisi 2 Kg kelengkeng pilihan dengan harga lebih hemat.",
  },
];