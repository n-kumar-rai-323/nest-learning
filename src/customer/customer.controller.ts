import { Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Body } from '@nestjs/common/decorators';
import { CreateCustomerDTO } from './DTO/create-customer_dto';
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

    @Get()
    getAllCustomers(){
        return this.customerService.getAllCustomers()
    }

    @Post()
    addCustomer(@Body() createCustomerDTO: CreateCustomerDTO){
        return this.customerService.addCustomer(createCustomerDTO)
    }
}
