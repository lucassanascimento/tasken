import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  update(data: Product): Promise<Product>;
  findById(id: string): Promise<Product | undefined>;
  findAll(): Promise<Product[]>;
  remove(id: string): Promise<void>;
  getAmount(id: string): Promise<number | undefined>;
  getByAmount(amount: number): Promise<Product | undefined>;
  findByLowerAmount(): Promise<Product | undefined>;
  findByLargeAmount(): Promise<Product | undefined>;
  findByProductOutOfStock(): Promise<Product[] | undefined>;
}
