import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
    constructor(private readonly proudctService: ProductService) { }

    @Get()
    @UseGuards(AuthGuard)
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
