import { injectable, inject } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class LargeAmountProductInStockService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(): Promise<Product | undefined> {
    const product = await this.productsRepository.findByLargeAmount();
    return product;
  }
}
