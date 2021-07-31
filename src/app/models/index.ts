import { IProduct, ICategory } from './product';
import { IUser } from './user';

export * from './user';
export * from './product';

export type IModel = IUser | IProduct | ICategory;
