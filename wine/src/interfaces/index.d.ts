export interface ITrasaction {
  id: string;
  title: string;
  description: string;
  value: number;
  category: string;
  date: string;
  type: string;
}

export interface IProduct {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size: string;
  rating: number;
  avaliations: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
}

export interface IListProduct {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: IProduct[];
}

export interface IProductResponse {
  products: IProduct[];
}
