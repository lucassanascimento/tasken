// import Service from '@shared/protocols/Service';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class DeleteProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('This product does not exist!', 400);
    }
    await this.productsRepository.remove(id);
  }
}
