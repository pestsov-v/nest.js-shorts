export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disadvantages: string;
  categories: string[];
  tags: string;
  characteristics: {
    [key: string]: string;
  };
}
