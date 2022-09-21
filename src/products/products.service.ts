import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dto/create-product.dto';
import { Products } from './entity/products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Products)
        private productRepository: Repository<Products>,
      ) {}

    async getAll(): Promise<Products[]>{
        return await this.productRepository.find()
    }

    async getById(id: number): Promise<Products>{
        return await this.productRepository.findOneBy({ id });
    }

    async create(productDTO: CreateProductDTO): Promise<Products>{
        return await this.productRepository.save(productDTO)
    }
}
