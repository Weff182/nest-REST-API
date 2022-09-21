import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Products } from './entity/products.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    providers: [ProductsService],
    controllers: [ProductsController]
})
export class ProductsModule {

}
