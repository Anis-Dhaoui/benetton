import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class OwnerGuard implements CanActivate {

  async canActivate(context: ExecutionContext) {

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const params = request.params;

    if (params.userId) {
      Logger.log("is this his own profile or this user is Admin? ", user._id == params.userId || user.role == 'Admin');
      return user._id == params.userId || user.role == 'Admin';

    }

    return true;
  }
}
