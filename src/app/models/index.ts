import { IProduct, ICategory } from './product';
import { IStore } from './store';
import { IUser } from './user';

export * from './user';
export * from './product';
export * from './store';

export type IModel = IUser | IProduct | ICategory | IStore;
