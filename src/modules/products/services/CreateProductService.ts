import Service from '@shared/protocols/Service';
import { injectable, inject } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
  manufacturer: string;
  amount: number;
  value: number;
}

@injectable()
export default class CreateProductService
  implements Service<IRequest, Product> {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({
    name,
    manufacturer,
    amount,
    value,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      manufacturer,
      amount,
      value,
    });

    return product;
  }
}
