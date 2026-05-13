import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer_interfaces';
import { CreateCustomerDTO } from './DTO/create-customer_dto';
@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getAllCustomers(): Customer[] {
        return this.customers;
    }

    addCustomer(createCustomerDTO: CreateCustomerDTO):
        Customer {
        const newCustomer: Customer = {
            id: Date.now(),
            ...createCustomerDTO,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }
}
