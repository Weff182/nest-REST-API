import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('products')
export class Products {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  price: number;
}