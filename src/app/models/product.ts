export interface IProduct {
  id: number;
  storeId: number;
  category: ICategory;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface ICategory {
  id: number;
  name: string;
}
