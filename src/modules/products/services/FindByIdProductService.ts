// import Service from '@shared/protocols/Service';
import { injectable, inject } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class FindByIdProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<Product | undefined> {
    const products = await this.productsRepository.findById(id);
    return products;
  }
}
