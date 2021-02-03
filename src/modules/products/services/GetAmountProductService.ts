import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class GetAmountProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<number | undefined> {
    const amountProducts = await this.productsRepository.getAmount(id);

    if (!amountProducts) {
      throw new AppError('This product does not exist!', 400);
    }
    return amountProducts;
  }
}
