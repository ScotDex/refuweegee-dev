export interface Product {
  id: number;
  name: string;
  priceInPence: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Black tee",
    priceInPence: 2000,
    category: "T-Shirt",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Barrowlands tee",
    priceInPence: 2200,
    category: "T-Shirt",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 3,
    name: "White tee",
    priceInPence: 2200,
    category: "T-Shirt",
    image: "https://picsum.photos/200/100",
  },
  {
    id: 4,
    name: "Tote",
    priceInPence: 1200,
    category: "Bag",
    image: "https://picsum.photos/220/100",
  },
  {
    id: 5,
    name: "Safe With Me pin",
    priceInPence: 500,
    category: "Accessory",
    image: "https://picsum.photos/230/300",
  },
];

export function getProduct(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPence(pence: number): string {
  return `£${(pence / 100).toFixed(2).replace(/\.00$/, "")}`;
}
