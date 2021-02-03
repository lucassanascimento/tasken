import { container } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '../../modules/products/infra/typeorm/repositories/ProductsRepository';

// register, cria uma nova instância
// registerSingleton, instância apenas uma vez
container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
