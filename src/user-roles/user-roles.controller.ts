import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/role.decorators';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Role } from 'src/guards/roles/roles.enums';

@Controller('user-roles')
export class UserRolesController {

  @Get('user-data')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAdminData() {
    return {
      message: 'This data is only for admin users',
    };
  }

  @Get('user-info')
  @UseGuards(RolesGuard)
  @Roles(Role.User, Role.Admin)
  getUserData() {
    return {
      message: 'This data is for user and admin',
    };
  }
}