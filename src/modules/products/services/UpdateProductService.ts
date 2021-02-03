import AppError from '@shared/errors/AppError';
import Service from '@shared/protocols/Service';
import { injectable, inject } from 'tsyringe';
import { isUuid } from 'uuidv4';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  id: string;
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
    id,
    name,
    manufacturer,
    amount,
    value,
  }: IRequest): Promise<Product> {
    if (!isUuid(id)) {
      throw new AppError('Product ID is invalid!', 400);
    }
    const checkProductExists = await this.productsRepository.findById(id);

    if (!checkProductExists) {
      throw new AppError('This product does not exist!', 400);
    }

    const product = await this.productsRepository.update({
      id,
      name,
      manufacturer,
      amount,
      value,
    });

    return product;
  }
}
