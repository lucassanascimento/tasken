import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column()
  amount: number;

  @Column()
  value: number;
}

export default Product;
