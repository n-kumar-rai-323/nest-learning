import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserController } from './user/user.controller';

import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';

import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';

import { LoggerMiddleware } from './middleware/logger/logger.middleware';

import { DatabseService } from './databse/databse.service';
import { DatabseController } from './databse/databse.controller';

import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EmployeeModule,
    CategoryModule,
    StudentModule,
    CustomerModule,

    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRoot(process.env.DATABASE_URL as string),
  ],

  controllers: [
    AppController,
    UserController,
    ProductController,
    MynameController,
    UserRolesController,
    ExceptionController,
    DatabseController,
  ],

  providers: [
    AppService,
    ProductService,
    DatabseService,
  ],
})

export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }

}