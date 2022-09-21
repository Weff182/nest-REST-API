import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Redirect, Header } from "@nestjs/common";
import { CreateProductDTO } from "./dto/create-product.dto";
import { UpdateProductDTO } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService){

  }
  @Get()
  // @Redirect('https://google.com', 301)
  getAll() {
    return this.productsService.getAll()
  }

  @Get(":id")
  getOne(@Param("id") id: number) {
    return this.productsService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Contorl', 'none')
  create(@Body() createProductDTO: CreateProductDTO) {
    return this.productsService.create(createProductDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Removed ${id}`
  }

  @Put(':id')
  update(@Body() updateProductDTO: UpdateProductDTO, @Param('id') id: string){
    return 'updated' + id
  }
}
