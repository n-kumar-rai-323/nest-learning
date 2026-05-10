import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {id:1, name:"Mobile", price:30000},
        {id:2, name:"Mobile", price:30000},
        {id:3, name:"Mobile", price:30000},
        {id:4, name:"Mobile", price:30000}
    ]

    getAllProduct(){
        return this.products
    }
    getProductById(id: number){
        return this.products.find((product)=>
        product.id == id)
    }
}
