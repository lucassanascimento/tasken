// import Service from '@shared/protocols/Service';
import { injectable, inject } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class ListProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.findAll();
    return products;
  }
}
