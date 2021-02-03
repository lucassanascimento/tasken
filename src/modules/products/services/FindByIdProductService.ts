// import Service from '@shared/protocols/Service';
import { injectable, inject } from 'tsyringe';
import { isUuid } from 'uuidv4';
import AppError from '@shared/errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

@injectable()
export default class FindByIdProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<Product | undefined> {
    if (!isUuid(id)) {
      throw new AppError('Product ID is invalid!', 400);
    }

    const products = await this.productsRepository.findById(id);
    return products;
  }
}
