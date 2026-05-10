import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly proudctService: ProductService) { }

    @Get()
    getProducts() {
        return this.proudctService.getAllProduct()
    }
    @Get(':id')
    getProduct(@Param('id') id:string){
        return this.proudctService.getProductById(
            (Number(id))
        )
    }

}
