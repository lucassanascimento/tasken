/* eslint-disable object-shorthand */
import { getRepository, Repository } from 'typeorm';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
// import IAmountProductDTO from '@modules/products/dtos/IAmountProductDTO';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    name,
    manufacturer,
    amount,
    value,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      manufacturer,
      amount,
      value,
    });
    await this.ormRepository.save(product);
    return product;
  }

  public async findAll(): Promise<Product[]> {
    const product = this.ormRepository.find();
    return product;
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: { id: id },
    });
    return product;
  }

  public async update({
    id,
    name,
    manufacturer,
    amount,
    value,
  }: Product): Promise<Product> {
    const product = await this.ormRepository.save({
      id: id,
      name: name,
      manufacturer: manufacturer,
      amount: amount,
      value: value,
    });
    return product;
  }

  public async getAmount(id: string): Promise<number | undefined> {
    const product = await this.ormRepository.findOne(id, {
      select: ['amount'],
    });
    return product?.amount;
  }

  public async getByAmount(amount: number): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: {
        amount: amount,
      },
    });
    return product;
  }

  public async findByLowerAmount(): Promise<Product | undefined> {
    const amount = await this.ormRepository
      .createQueryBuilder('products')
      .select('MIN(products.amount)', 'min')
      .getRawOne();

    const product = await this.getByAmount(amount.min);
    return product;
  }

  public async findByLargeAmount(): Promise<Product | undefined> {
    const amount = await this.ormRepository
      .createQueryBuilder('products')
      .select('MAX(products.amount)', 'max')
      .getRawOne();

    const product = await this.getByAmount(amount.max);
    return product;
  }

  public async findByProductOutOfStock(): Promise<Product[] | undefined> {
    const product = this.ormRepository
      .createQueryBuilder('products')
      .select('products')
      .where('products.amount <= :amount', { amount: 5 })
      .getMany();

    return product;
  }
}

export default ProductsRepository;
