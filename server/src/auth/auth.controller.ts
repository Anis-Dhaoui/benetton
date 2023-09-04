import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { Controller, Post, Body, HttpStatus, Res, Req, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Req() req) {
    console.log(req)
    return this.authService.login(req.user);
  }

}
