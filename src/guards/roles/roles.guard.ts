import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './roles.enums';
import { ROLES_KEY } from './role.decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // If no roles are set, allow access
    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();

    // get role from header
    const userRole = request.headers['x-user-role'] as Role;

    if (!userRole) return false;

    return requiredRoles.includes(userRole);
  }
}